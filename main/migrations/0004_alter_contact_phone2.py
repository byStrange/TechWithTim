# Generated by Django 4.0.3 on 2022-06-03 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_course_about_alter_course_course_details'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='phone2',
            field=models.CharField(blank=True, max_length=255, verbose_name='Phone2'),
        ),
    ]
