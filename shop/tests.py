from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Product

class ProductApiTest(TestCase):
    def setUp(self):
        # 1. Initialize the API client
        self.client = APIClient()
        
        # 2. Create a User (this satisfies the 'seller_id' requirement)
        self.test_user = User.objects.create_user(
            username='test_seller', 
            password='password123'
        )
        
        # 3. Create the Product and link it to the user we just made
        Product.objects.create(
            name="Test Mobile", 
            price=100.00,
            seller=self.test_user  # <--- This fixes the 'seller_id' error
        )

    def test_get_products(self):
        # 4. Try to get the products via the API
        response = self.client.get('/api/products/')
        
        # 5. Assertions
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], "Test Mobile")