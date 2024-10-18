from rest_framework import serializers
from .models import Page

class PageSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ['id', 'title', 'subtitle', 'type', 'card_color_light', 'card_color_dark', 'logo_url', 'banner_url']


class PageDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ['title', 'subtitle', 'type', 'content', 'views_count']
