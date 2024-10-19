from django.http import JsonResponse
from .models import Page
from .serializer import PageSummarySerializer, PageDetailSerializer
from asgiref.sync import sync_to_async
from django.db.models import F

@sync_to_async
def get_page(request, page_id):
    Page.objects.filter(pk=page_id).update(views_count=F('views_count') + 1)
    page = Page.objects.get(pk=page_id)  
    serializer = PageDetailSerializer(page)
    return JsonResponse(serializer.data)

@sync_to_async
def list_pages(request):
    pages = Page.objects.filter(is_shown=True).order_by('order')
    serializer = PageSummarySerializer(pages, many=True)
    return JsonResponse(serializer.data, safe=False)
