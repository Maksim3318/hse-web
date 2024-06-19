"""forlab URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views
from django.urls import path
from apps.appform import views as v
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', v.index, name='home'),
    path('admin/', admin.site.urls),
    path('appform/', v.Create.as_view(), name='appform'),
    path('outart/', v.Outart.as_view(), name='outart'),
    path('findart/', v.Findart.as_view(), name='findart'),
    path('accounts/login/', views.LoginView.as_view(), name='login'),
    path('accounts/logout/', views.LogoutView.as_view(), name='logout'),
]

