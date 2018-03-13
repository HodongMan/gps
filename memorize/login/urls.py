from django.conf.urls import url
from login import views

urlpatterns = [

    url(r'^api/login/$', views.LoginList.as_view(),
        name=views.LoginList.name),
    url(r'^api/login/(?P<pk>[0-9]+)/$', views.LoginDetail.as_view(),
        name=views.LoginDetail.name),

]
