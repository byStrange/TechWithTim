from django.urls import path

from . import views

app_name = 'main'

urlpatterns = [
	path('', views.home, name='home'),

	path('contact/add', views.contact_view, name='contact_add'),
]