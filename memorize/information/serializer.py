from rest_framework import serializers
from information.models import Information

class InformationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Login
        fields = (
            'id',
            'location',
            'name',
            'content',
            'comments',
            'created'
        )
