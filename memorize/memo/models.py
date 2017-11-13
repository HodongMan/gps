from django.db import models


class Memo(models.Model):

    name = models.CharField(max_length=200)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:

        ordering = ('-created',)


