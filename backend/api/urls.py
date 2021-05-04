# api/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path('journal/list/', views.listJournals, name='api-login'),
    path('journal/<int:id>/', views.journalAction, name='api-logout'),
    path('journal/add/', views.addJournal, name='api-session'),
]