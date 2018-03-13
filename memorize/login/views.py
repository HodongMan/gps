from rest_framework import generics

from login.models import Login
from login.serializer import LoginSerializer

# Create your views here.

class LoginList(generics.ListCreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    name = 'login-list'

class LoginDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer
    name = 'login-detail'
