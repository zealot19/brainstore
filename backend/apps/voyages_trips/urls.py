from django.urls import path
from . import views as v

urlpatterns = [
    path("", v.TripListCreateView.as_view()),
    path("<uuid:trip_id>/", v.TripDetailView.as_view()),
    path("<uuid:trip_id>/eligible-vehicles/", v.TripEligibleVehiclesView.as_view()),
    path("<uuid:trip_id>/assign-vehicle/", v.TripAssignVehicleView.as_view()),
    path("<uuid:trip_id>/crew/", v.TripCrewView.as_view()),
    path("<uuid:trip_id>/crew/<uuid:crew_id>/", v.TripCrewDetailView.as_view()),
    path("<uuid:trip_id>/seats/", v.TripSeatsView.as_view()),
    path("<uuid:trip_id>/seats/block/", v.TripSeatBlockView.as_view()),
    path("<uuid:trip_id>/seats/unblock/", v.TripSeatUnblockView.as_view()),
    path("<uuid:trip_id>/stops/", v.TripStopsView.as_view()),
    path("<uuid:trip_id>/submit/", v.TripSubmitView.as_view()),
    path("<uuid:trip_id>/depart/", v.TripDepartView.as_view()),
    path("<uuid:trip_id>/complete/", v.TripCompleteView.as_view()),
    path("<uuid:trip_id>/cancel/", v.TripCancelView.as_view()),
    path("<uuid:trip_id>/suspend/", v.TripSuspendView.as_view()),
    path("<uuid:trip_id>/resume/", v.TripResumeView.as_view()),
    path("<uuid:trip_id>/mark-delayed/", v.TripMarkDelayedView.as_view()),
    path("<uuid:trip_id>/clear-delay/", v.TripClearDelayView.as_view()),
]
