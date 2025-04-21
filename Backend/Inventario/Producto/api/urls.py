from rest_framework.routers import DefaultRouter
from Producto.api.views import ProductoViewSet

router = DefaultRouter()
router.register('producto', ProductoViewSet, basename='productos')
urlpatterns = router.urls