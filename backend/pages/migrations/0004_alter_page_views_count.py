# Generated by Django 5.1.2 on 2024-10-16 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_alter_page_views_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='views_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
