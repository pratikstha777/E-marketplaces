from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)} # Automatically types the slug as you type the name

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'seller', 'price', 'stock', 'created_at']
    list_filter = ['created_at', 'category']
    search_fields = ['name', 'description']
    # If using UUIDs or Slugs, prepopulate or read-only them here