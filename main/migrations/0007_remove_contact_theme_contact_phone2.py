# Generated by Django 4.0.3 on 2022-05-26 13:43

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_course_coursetype_course_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='theme',
        ),
        migrations.AddField(
            model_name='contact',
            name='phone2',
            field=models.CharField(default=datetime.datetime(2022, 5, 26, 13, 43, 12, 91928, tzinfo=utc), max_length=255, verbose_name='Phone2'),
            preserve_default=False,
        ),
    ]
