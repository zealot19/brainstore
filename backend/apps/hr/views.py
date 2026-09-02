from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView

from apps.core.permissions import IsInstitutionAdmin
from apps.core.responses import (
    success_response, created_response, error_response, no_content_response,
)
from apps.core.exceptions import ApplicationError
from apps.core.pagination import StandardResultsSetPagination
from apps.system_config.models import Company
from apps.hr.models import Employee, ContractType, LeaveType

from . import selectors, services
from .serializers import (
    GradeSerializer, GradeWriteSerializer,
    ContractTypeSerializer, ContractTypeWriteSerializer,
    LeaveTypeSerializer, LeaveTypeWriteSerializer,
    DepartmentSerializer, DepartmentWriteSerializer, DepartmentTreeSerializer,
    JobPositionSerializer, JobPositionWriteSerializer,
    EmployeeListSerializer, EmployeeDetailSerializer,
    EmployeeCreateSerializer, EmployeeUpdateSerializer, EmployeeTerminateSerializer,
    ContractSerializer, ContractWriteSerializer,
    LeaveBalanceSerializer,
    LeaveRequestListSerializer, LeaveRequestDetailSerializer,
    LeaveRequestCreateSerializer, LeaveRequestRejectSerializer,
)


# ── Utilitaires ────────────────────────────────────────────────────────────────

def _scope_company_id(request):
    if request.user.is_superuser:
        return request.query_params.get("company_id")
    return str(request.user.company_id) if request.user.company_id else None


def _resolve_company(request, body_company_id=None):
    if request.user.is_superuser:
        cid = body_company_id or request.query_params.get("company_id")
        if not cid:
            return None, error_response(_("company_id requis pour les super administrateurs."))
        try:
            return Company.objects.get(id=cid), None
        except Company.DoesNotExist:
            return None, error_response(_("Institution introuvable."), status_code=404)
    company = request.user.company
    if not company:
        return None, error_response(_("Votre compte n'est pas associé à une institution."))
    return company, None


def _parse_bool(v):
    if v is None:
        return None
    return v.lower() in ("true", "1", "yes")


# ══════════════════════════════════════════════════════════════════════════════
# GRADES
# ══════════════════════════════════════════════════════════════════════════════

class GradeListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        grades = selectors.list_grades(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(grades, request)
        return paginator.get_paginated_response(GradeSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = GradeWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            grade = services.create_grade(
                company=company, created_by=request.user,
                code=d["code"], name=d["name"], level=d.get("level", 1),
                description=d.get("description", ""),
                salary_min=d.get("salary_min"), salary_max=d.get("salary_max"),
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(GradeSerializer(grade).data)


class GradeDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, grade_id, request):
        company_id = _scope_company_id(request)
        return selectors.get_grade(grade_id, company_id)

    def get(self, request, pk):
        grade = self._get(pk, request)
        if not grade:
            return error_response(_("Grade introuvable."), status_code=404)
        return success_response(GradeSerializer(grade).data)

    def patch(self, request, pk):
        grade = self._get(pk, request)
        if not grade:
            return error_response(_("Grade introuvable."), status_code=404)
        payload = GradeWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            grade = services.update_grade(grade, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(GradeSerializer(grade).data)

    def delete(self, request, pk):
        grade = self._get(pk, request)
        if not grade:
            return error_response(_("Grade introuvable."), status_code=404)
        try:
            services.delete_grade(grade, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# TYPES DE CONTRAT
# ══════════════════════════════════════════════════════════════════════════════

class ContractTypeListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        cts = selectors.list_contract_types(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(cts, request)
        return paginator.get_paginated_response(ContractTypeSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = ContractTypeWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            ct = services.create_contract_type(company=company, created_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(ContractTypeSerializer(ct).data)


class ContractTypeDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk, request):
        return selectors.get_contract_type(pk, _scope_company_id(request))

    def get(self, request, pk):
        ct = self._get(pk, request)
        if not ct:
            return error_response(_("Type de contrat introuvable."), status_code=404)
        return success_response(ContractTypeSerializer(ct).data)

    def patch(self, request, pk):
        ct = self._get(pk, request)
        if not ct:
            return error_response(_("Type de contrat introuvable."), status_code=404)
        payload = ContractTypeWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            ct = services.update_contract_type(ct, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ContractTypeSerializer(ct).data)


# ══════════════════════════════════════════════════════════════════════════════
# TYPES DE CONGÉ
# ══════════════════════════════════════════════════════════════════════════════

class LeaveTypeListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        lts = selectors.list_leave_types(company_id, search=request.query_params.get("search"))
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(lts, request)
        return paginator.get_paginated_response(LeaveTypeSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = LeaveTypeWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            lt = services.create_leave_type(company=company, created_by=request.user, **d)
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(LeaveTypeSerializer(lt).data)


class LeaveTypeDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk, request):
        return selectors.get_leave_type(pk, _scope_company_id(request))

    def get(self, request, pk):
        lt = self._get(pk, request)
        if not lt:
            return error_response(_("Type de congé introuvable."), status_code=404)
        return success_response(LeaveTypeSerializer(lt).data)

    def patch(self, request, pk):
        lt = self._get(pk, request)
        if not lt:
            return error_response(_("Type de congé introuvable."), status_code=404)
        payload = LeaveTypeWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            lt = services.update_leave_type(lt, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(LeaveTypeSerializer(lt).data)


# ══════════════════════════════════════════════════════════════════════════════
# DÉPARTEMENTS
# ══════════════════════════════════════════════════════════════════════════════

class DepartmentListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        depts = selectors.list_departments(
            company_id,
            parent_id=request.query_params.get("parent_id"),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(depts, request)
        return paginator.get_paginated_response(DepartmentSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = DepartmentWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            dept = services.create_department(
                company=company, created_by=request.user,
                code=d["code"], name=d["name"],
                description=d.get("description", ""),
                parent_id=d.get("parent_id"), head_id=d.get("head_id"),
                order=d.get("order", 0),
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(DepartmentSerializer(dept).data)


class DepartmentTreeView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        roots = selectors.list_root_departments(company_id)
        return success_response(DepartmentTreeSerializer(roots, many=True).data)


class DepartmentDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk, request):
        return selectors.get_department(pk, _scope_company_id(request))

    def get(self, request, pk):
        dept = self._get(pk, request)
        if not dept:
            return error_response(_("Département introuvable."), status_code=404)
        return success_response(DepartmentSerializer(dept).data)

    def patch(self, request, pk):
        dept = self._get(pk, request)
        if not dept:
            return error_response(_("Département introuvable."), status_code=404)
        payload = DepartmentWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            dept = services.update_department(dept, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(DepartmentSerializer(dept).data)

    def delete(self, request, pk):
        dept = self._get(pk, request)
        if not dept:
            return error_response(_("Département introuvable."), status_code=404)
        try:
            services.delete_department(dept, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# POSTES
# ══════════════════════════════════════════════════════════════════════════════

class JobPositionListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        jps = selectors.list_job_positions(
            company_id,
            department_id=request.query_params.get("department_id"),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(jps, request)
        return paginator.get_paginated_response(JobPositionSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = JobPositionWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            jp = services.create_job_position(
                company=company, created_by=request.user,
                title=d["title"], code=d.get("code", ""),
                description=d.get("description", ""),
                department_id=d.get("department_id"),
                grade_id=d.get("grade_id"),
                is_management=d.get("is_management", False),
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(JobPositionSerializer(jp).data)


class JobPositionDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, pk, request):
        return selectors.get_job_position(pk, _scope_company_id(request))

    def get(self, request, pk):
        jp = self._get(pk, request)
        if not jp:
            return error_response(_("Poste introuvable."), status_code=404)
        return success_response(JobPositionSerializer(jp).data)

    def patch(self, request, pk):
        jp = self._get(pk, request)
        if not jp:
            return error_response(_("Poste introuvable."), status_code=404)
        payload = JobPositionWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            jp = services.update_job_position(jp, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(JobPositionSerializer(jp).data)

    def delete(self, request, pk):
        jp = self._get(pk, request)
        if not jp:
            return error_response(_("Poste introuvable."), status_code=404)
        try:
            services.delete_job_position(jp, deleted_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return no_content_response()


# ══════════════════════════════════════════════════════════════════════════════
# EMPLOYÉS
# ══════════════════════════════════════════════════════════════════════════════

class EmployeeListView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        employees = selectors.list_employees(
            company_id,
            agency_id=request.query_params.get("agency_id"),
            department_id=request.query_params.get("department_id"),
            job_position_id=request.query_params.get("job_position_id"),
            status=request.query_params.get("status"),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(employees, request)
        return paginator.get_paginated_response(EmployeeListSerializer(page, many=True).data)

    def post(self, request):
        company, err = _resolve_company(request, request.data.get("company_id"))
        if err:
            return err
        payload = EmployeeCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            emp = services.create_employee(
                company=company, created_by=request.user,
                first_name=d["first_name"], last_name=d["last_name"],
                hire_date=d["hire_date"],
                gender=d.get("gender", ""),
                birth_date=d.get("birth_date"),
                birth_place=d.get("birth_place", ""),
                nationality=d.get("nationality", ""),
                marital_status=d.get("marital_status", ""),
                dependents_count=d.get("dependents_count", 0),
                phone=d.get("phone", ""),
                personal_email=d.get("personal_email", ""),
                emergency_contact_name=d.get("emergency_contact_name", ""),
                emergency_contact_phone=d.get("emergency_contact_phone", ""),
                id_card_number=d.get("id_card_number", ""),
                id_card_expiry=d.get("id_card_expiry"),
                social_security_no=d.get("social_security_no", ""),
                agency_id=d.get("agency_id"),
                user_id=d.get("user_id"),
                department_id=d.get("department_id"),
                job_position_id=d.get("job_position_id"),
                grade_id=d.get("grade_id"),
                manager_id=d.get("manager_id"),
                confirmation_date=d.get("confirmation_date"),
                bank_name=d.get("bank_name", ""),
                bank_account_number=d.get("bank_account_number", ""),
                bank_rib=d.get("bank_rib", ""),
                employee_number=d.get("employee_number"),
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(EmployeeDetailSerializer(emp).data)


class EmployeeDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, emp_id, request):
        return selectors.get_employee(emp_id, _scope_company_id(request))

    def get(self, request, emp_id):
        emp = self._get(emp_id, request)
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        return success_response(EmployeeDetailSerializer(emp).data)

    def patch(self, request, emp_id):
        emp = self._get(emp_id, request)
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        payload = EmployeeUpdateSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            emp = services.update_employee(emp, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(EmployeeDetailSerializer(emp).data)


class EmployeeTerminateView(APIView):
    """POST /hr/employees/<id>/terminate/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, emp_id):
        emp = selectors.get_employee(emp_id, _scope_company_id(request))
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        payload = EmployeeTerminateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            emp = services.terminate_employee(
                emp, termination_date=d["termination_date"],
                reason=d.get("reason", ""), updated_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(EmployeeDetailSerializer(emp).data)


# ══════════════════════════════════════════════════════════════════════════════
# CONTRATS
# ══════════════════════════════════════════════════════════════════════════════

class EmployeeContractListView(APIView):
    """GET /hr/employees/<id>/contracts/ | POST — crée un nouveau contrat."""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, emp_id):
        contracts = selectors.list_employee_contracts(emp_id, _scope_company_id(request))
        if contracts is None:
            return error_response(_("Employé introuvable."), status_code=404)
        return success_response(ContractSerializer(contracts, many=True).data)

    def post(self, request, emp_id):
        emp = selectors.get_employee(emp_id, _scope_company_id(request))
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        payload = ContractWriteSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data
        try:
            ct = ContractType.objects.get(id=d["contract_type_id"])
        except ContractType.DoesNotExist:
            return error_response(_("Type de contrat introuvable."), status_code=404)
        try:
            contract = services.create_contract(
                employee=emp, created_by=request.user,
                contract_type=ct,
                start_date=d["start_date"],
                base_salary=d["base_salary"],
                end_date=d.get("end_date"),
                reference=d.get("reference", ""),
                currency_id=d.get("currency_id"),
                payment_frequency=d.get("payment_frequency", "monthly"),
                transport_allowance=d.get("transport_allowance", 0),
                housing_allowance=d.get("housing_allowance", 0),
                meal_allowance=d.get("meal_allowance", 0),
                other_allowances=d.get("other_allowances", 0),
                notes=d.get("notes", ""),
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(ContractSerializer(contract).data)


class EmployeeContractDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, emp_id, contract_id):
        contract = selectors.get_contract(contract_id, emp_id, _scope_company_id(request))
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        return success_response(ContractSerializer(contract).data)

    def patch(self, request, emp_id, contract_id):
        contract = selectors.get_contract(contract_id, emp_id, _scope_company_id(request))
        if not contract:
            return error_response(_("Contrat introuvable."), status_code=404)
        payload = ContractWriteSerializer(data=request.data, partial=True)
        payload.is_valid(raise_exception=True)
        try:
            contract = services.update_contract(contract, updated_by=request.user, **payload.validated_data)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(ContractSerializer(contract).data)


# ══════════════════════════════════════════════════════════════════════════════
# SOLDES DE CONGÉ
# ══════════════════════════════════════════════════════════════════════════════

class EmployeeLeaveBalanceView(APIView):
    """GET /hr/employees/<id>/leave-balances/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, emp_id):
        emp = selectors.get_employee(emp_id, _scope_company_id(request))
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        year = request.query_params.get("year")
        balances = selectors.list_employee_leave_balances(emp_id, year=year)
        return success_response(LeaveBalanceSerializer(balances, many=True).data)


class EmployeeLeaveRequestListView(APIView):
    """GET /hr/employees/<id>/leave-requests/"""
    permission_classes = [IsInstitutionAdmin]

    def get(self, request, emp_id):
        company_id = _scope_company_id(request)
        emp = selectors.get_employee(emp_id, company_id)
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)
        requests = selectors.list_leave_requests(
            company_id, employee_id=emp_id,
            status=request.query_params.get("status"),
            year=request.query_params.get("year"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(requests, request)
        return paginator.get_paginated_response(LeaveRequestListSerializer(page, many=True).data)


# ══════════════════════════════════════════════════════════════════════════════
# DEMANDES DE CONGÉ (vue globale admin)
# ══════════════════════════════════════════════════════════════════════════════

class LeaveRequestListView(APIView):
    """
    GET  /hr/leave-requests/ — liste toutes les demandes (admin)
    POST /hr/leave-requests/ — créer une demande de congé
    """
    permission_classes = [IsInstitutionAdmin]

    def get(self, request):
        company_id = _scope_company_id(request)
        if not company_id:
            return error_response(_("Veuillez préciser l'institution concernée (paramètre company_id)."))
        requests = selectors.list_leave_requests(
            company_id,
            employee_id=request.query_params.get("employee_id"),
            status=request.query_params.get("status"),
            leave_type_id=request.query_params.get("leave_type_id"),
            year=request.query_params.get("year"),
            search=request.query_params.get("search"),
        )
        paginator = StandardResultsSetPagination()
        page = paginator.paginate_queryset(requests, request)
        return paginator.get_paginated_response(LeaveRequestListSerializer(page, many=True).data)

    def post(self, request):
        company_id = _scope_company_id(request)
        payload = LeaveRequestCreateSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        d = payload.validated_data

        emp = selectors.get_employee(d["employee_id"], company_id)
        if not emp:
            return error_response(_("Employé introuvable."), status_code=404)

        lt = selectors.get_leave_type(d["leave_type_id"], company_id)
        if not lt:
            return error_response(_("Type de congé introuvable."), status_code=404)

        try:
            lr = services.create_leave_request(
                employee=emp, leave_type=lt,
                start_date=d["start_date"], end_date=d["end_date"],
                reason=d.get("reason", ""), created_by=request.user,
            )
        except ApplicationError as e:
            return error_response(str(e))
        return created_response(LeaveRequestDetailSerializer(lr).data)


class LeaveRequestDetailView(APIView):
    permission_classes = [IsInstitutionAdmin]

    def _get(self, req_id, request):
        return selectors.get_leave_request(req_id, _scope_company_id(request))

    def get(self, request, req_id):
        lr = self._get(req_id, request)
        if not lr:
            return error_response(_("Demande de congé introuvable."), status_code=404)
        return success_response(LeaveRequestDetailSerializer(lr).data)


class LeaveRequestApproveView(APIView):
    """POST /hr/leave-requests/<id>/approve/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, req_id):
        lr = selectors.get_leave_request(req_id, _scope_company_id(request))
        if not lr:
            return error_response(_("Demande de congé introuvable."), status_code=404)
        try:
            lr = services.approve_leave_request(lr, approved_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(LeaveRequestDetailSerializer(lr).data,
                                message=_("Demande approuvée."))


class LeaveRequestRejectView(APIView):
    """POST /hr/leave-requests/<id>/reject/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, req_id):
        lr = selectors.get_leave_request(req_id, _scope_company_id(request))
        if not lr:
            return error_response(_("Demande de congé introuvable."), status_code=404)
        payload = LeaveRequestRejectSerializer(data=request.data)
        payload.is_valid(raise_exception=True)
        try:
            lr = services.reject_leave_request(
                lr, rejected_by=request.user, reason=payload.validated_data.get("reason", "")
            )
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(LeaveRequestDetailSerializer(lr).data,
                                message=_("Demande refusée."))


class LeaveRequestCancelView(APIView):
    """POST /hr/leave-requests/<id>/cancel/"""
    permission_classes = [IsInstitutionAdmin]

    def post(self, request, req_id):
        lr = selectors.get_leave_request(req_id, _scope_company_id(request))
        if not lr:
            return error_response(_("Demande de congé introuvable."), status_code=404)
        try:
            lr = services.cancel_leave_request(lr, cancelled_by=request.user)
        except ApplicationError as e:
            return error_response(str(e))
        return success_response(LeaveRequestDetailSerializer(lr).data,
                                message=_("Demande annulée."))
