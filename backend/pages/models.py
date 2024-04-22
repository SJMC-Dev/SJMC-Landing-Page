from django.db import models

class Page(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True)
    type = models.CharField(max_length=10, choices=(
        ('article', 'Article'), 
        ('link', 'Link')
    ))
    content = models.TextField()
    is_shown = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0, db_index=True, blank=False, null=False)
    card_color_light = models.CharField(max_length=7, default='#FFFFFF')
    card_color_dark = models.CharField(max_length=7, default='#000000')

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title

