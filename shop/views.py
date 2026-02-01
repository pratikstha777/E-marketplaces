from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer