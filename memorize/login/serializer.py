from rest_framework import serializers
from login.models import Login

class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = Login
        fields = (
            'id',
            'username',
            'email',
            'password',
            'password_confirm'
        )
