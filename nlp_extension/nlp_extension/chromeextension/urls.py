from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('spacy/', views.perform_ner, name='spacy_ner'),
]