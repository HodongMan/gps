from django.conf.urls import url
from memo import views


urlpatterns = [
    
    
    url(r'^api/memo/$', views.MemoList.as_view(),
        name=views.MemoList.name),
    url(r'^api/memo/(?P<pk>[0-9]+)/$', views.MemoDetail.as_view(),
        name=views.MemoDetail.name),
    

]
