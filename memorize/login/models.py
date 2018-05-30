from django.db import models

# Create your models here.
class Login(models.Model):

    username = models.CharField(max_length=200)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=200)
    password_confirm = models.CharField(max_length=200)

    class Meta:
        ordering = ('-username',)
