from rest_framework import viewsets 
from Producto.models import Producto
from Producto.api.serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    """
    Endpoint de la API que posibilita la visualización y edición de productos.
    """
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
