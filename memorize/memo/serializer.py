from rest_framework import serializers
from memo.models import Memo

class MemoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Memo
        fields = (
            'id',
            'name',
            'content',
            'created'
        )

