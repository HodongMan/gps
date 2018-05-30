from django.conf.urls import url
from information import views

urlpatterns = [


    url(r'^api/information/$', views.InformationList.as_view(),
        name=views.InformationList.name),
    url(r'^api/information/(?P<pk>[0-9]+)/$', views.InformationDetail.as_view(),
        name=views.InformationDetail.name),


]
