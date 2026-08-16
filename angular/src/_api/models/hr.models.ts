export interface Employee {
  id:              string;
  employee_number: string;
  full_name:       string;
  first_name:      string;
  last_name:       string;
  gender?:         string;
  phone?:          string;
  personal_email?: string;
  job_title?:      string | null;
  department_name?: string | null;
  hire_date?:      string;
  status?:         string;
  status_label?:   string;
  is_active?:      boolean;
}
