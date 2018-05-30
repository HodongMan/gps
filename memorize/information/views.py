from rest_framework import generics

# Create your views here.
from information.models import Information
from information.serializer import InformationSerializer

class InformationList(generics.ListCreateAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    name = 'information-list'

class InformationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    name = 'information-detail'
