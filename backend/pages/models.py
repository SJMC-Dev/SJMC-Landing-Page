from django.db import models

class Page(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100, blank=True)
    type = models.CharField(max_length=10, choices=(
        ('article', 'Article'), 
        ('link', 'Link')
    ))
    content = models.TextField()
    is_shown = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0, db_index=True, blank=False, null=False)
    card_color_light = models.CharField(max_length=7, default='#FFFFFF')
    card_color_dark = models.CharField(max_length=7, default='#000000')
    logo_url = models.CharField(max_length=100, blank=True)
    banner_url = models.CharField(max_length=100, blank=True)
    views_count = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

