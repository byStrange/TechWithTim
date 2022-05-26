from .models import Settings, Course

def view_all(request):
    context = {
        "setting":Settings.objects.first(),
        "courses":Course.objects.all()
    }
    return context