from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import Page

class PageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'type', 'is_shown', 'order')
    list_editable = ('is_shown', 'order')
    list_filter = ('type', 'is_shown')
    search_fields = ('title', 'subtitle', 'content')

admin.site.register(Page, PageAdmin)
