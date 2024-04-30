from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', views.StudentViewSet)

urlpatterns = router.urls