from django.urls import path
from apps.sync import views

urlpatterns = [
    path("push/", views.SyncPushView.as_view(), name="sync-push"),
    path("pull/", views.SyncPullView.as_view(), name="sync-pull"),
    path("snapshot/", views.SyncSnapshotView.as_view(), name="sync-snapshot"),
    path("heartbeat/", views.SyncHeartbeatView.as_view(), name="sync-heartbeat"),
    path("jobs/poll/", views.SyncJobsPollView.as_view(), name="sync-jobs-poll"),
    path("jobs/result/", views.SyncJobsResultView.as_view(), name="sync-jobs-result"),
]
