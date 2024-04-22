from django.urls import path
from .views import get_page, list_pages

urlpatterns = [
    path('pages/<int:page_id>/', get_page, name='get_page'),
    path('list-pages/', list_pages, name='list_pages'),
]
