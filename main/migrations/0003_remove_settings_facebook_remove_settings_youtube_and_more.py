# Generated by Django 4.0.4 on 2022-05-12 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_rename_image_photo_photo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='settings',
            name='facebook',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='youtube',
        ),
        migrations.AddField(
            model_name='settings',
            name='tiktok',
            field=models.CharField(default='0', max_length=255, verbose_name='@Youtube'),
        ),
    ]
