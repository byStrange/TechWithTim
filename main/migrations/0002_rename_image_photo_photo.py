# Generated by Django 3.2.8 on 2022-05-09 15:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='photo',
            old_name='image',
            new_name='photo',
        ),
    ]
