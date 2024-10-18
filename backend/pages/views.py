from django.http import JsonResponse
from .models import Page
from .serializer import PageSummarySerializer, PageDetailSerializer
from asgiref.sync import sync_to_async

@sync_to_async
def get_page(request, page_id):
    page = Page.objects.get(pk=page_id)
    page.views_count += 1
    page.save()
    serializer = PageDetailSerializer(page)
    return JsonResponse(serializer.data)

@sync_to_async
def list_pages(request):
    pages = Page.objects.filter(is_shown=True).order_by('order')
    serializer = PageSummarySerializer(pages, many=True)
    return JsonResponse(serializer.data, safe=False)
