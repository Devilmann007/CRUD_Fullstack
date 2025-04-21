from django.db import models

# Create your models here.
# Aca se crean los modelos de la base de datos para cada tabla, cada class define una tabla
# y cada atributo de la clase define una columna de la tabla
class Producto(models.Model):
    id = models.AutoField(primary_key=True)
    marca= models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.FloatField()
    cantidad = models.IntegerField()
    fecha_creacion = models.DateTimeField(auto_now_add=True) # auto_now_add se usa para la fecha de creacion 
    fecha_actualizacion = models.DateTimeField(auto_now=True) # auto_now=True se usa para la fecha de actualizacion

    def __str__(self):
        return self.marca