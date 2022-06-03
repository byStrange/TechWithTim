from django.shortcuts import render, redirect
from .models import *
from .forms import ContactForm


def home(request):
    course = Course.objects.all()
    teacher = Teacher.objects.all()
    faq = Faq.objects.all()
    photo = Photo.objects.all()
    length = len(faq) // 2
    faq1 = faq[:length]
    faq2 = faq[length:]
    setting = Settings.objects.first()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = ContactForm()
    context = {
        'courses': course,
        'teachers': teacher,
        'photos': photo,
        'form': form,
        'faq1': faq1,
        'faq2': faq2, 
        'setting': setting,
    }
    return render(request, 'core/index.html', context)


