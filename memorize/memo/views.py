from rest_framework import generics

from memo.models import Memo
from memo.serializer import MemoSerializer


class MemoList(generics.ListCreateAPIView):

    queryset = Memo.objects.all()
    serializer_class = MemoSerializer
    name = 'memo-list'

class MemoDetail(generics.RetrieveUpdateDestroyAPIView):

    queryset = Memo.objects.all()
    serializer_class = MemoSerializer
    name = 'memo-detail'
