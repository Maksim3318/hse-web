from django.shortcuts import render, redirect
from .models import Articles
from .forms import ArticlesForm
from django.db.models import Q
from django.forms import formset_factory
from django.contrib.auth.decorators import login_required
import requests
import os

def create(request):
	error = ''
	if request.method == 'POST':
		form = ArticlesForm(request.POST, request.FILES)
		if form.is_valid():
			obj = form.save()
			return redirect('home')
		else:
			error = 'Форма заполнена неверно'
		
	form = ArticlesForm()
	
	data = {
		'form': form,
		'error': error
	}
	return render(request, "appform.html", data)

@login_required
def outart(request):
	art = Articles.objects.all()
	return render(request, 'outart.html', {'art':art})

def findart(request):
	error = ''
	if request.method == 'GET':
		q = request.GET.get('num')
		art = Articles.objects.filter(number=q)
		if art:
			return render(request, 'findart.html', {'art':art})
		else: 
			if q:
				error = 'Такой заявки нет'
			return render(request, 'findart.html', {'error':error})
			
def edit(request, number):
	try:
		article = Articles.objects.get(number=number)
		form = ArticlesForm(instance = article)
		data = {
			'form':form,
			'article':article
		}
		if request.method == "POST":
			form = ArticlesForm(request.POST, instance = article)
			if form.is_valid():
				form.save()
				return redirect('outart')
		else:
			return render(request, "edit.html", data)
	except Articles.DoesNotExist:
		return redirect('home')		

def manual(request):
	return render(request, 'manual.html')

def logout(reques):
	if request.method == "GET":
		django.contrib.auth.logout()
		return redirect('home')
		