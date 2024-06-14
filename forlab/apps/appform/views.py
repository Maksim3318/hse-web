from .models import Articles
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from .serializers import ArticleSerializer
import requests
import os

class Create(APIView):
	def post(self, request, *args, **kwargs):
		data = request.data
		serializer = ArticleSerializer(data=data)
		if serializer.is_valid():
			obj = serializer.save()
			return Response({'message': 'Заявка принята'}, serializer.data, status=status.HTTP_200_OK)
		else:
			return Response({'message': 'Введены некорректные данные'}, serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Outart(APIView):
	def get(self, request, *args, **kwargs):
		data = Articles.objects.all()
		serializer = ArticleSerializer(data, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

	def put(self, request, *args, **kwargs):
		instance = Articles.objects.get(number=request.data.get('number'))
		if not instance:
			return Response({"message": "Заявка не найдена"}, status=status.HTTP_400_BAD_REQUEST)
		data = {
			'status': request.data.get('status')
		}
		serializer = ArticleSerializer(instance=instance, data=data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Findart(APIView):
	def get(self, request, *args, **kwargs):
		num = request.query_params.get('number')
		data = Articles.objects.filter(number=num)
		if len(data) == 1:
			serializer = ArticleSerializer(data[0])
			return Response(serializer.data, status=status.HTTP_200_OK)
		elif len(data) == 0:
			return Response({'message': f'Заявка {num} не найдена'}, status=status.HTTP_400_BAD_REQUEST)
		else:
			return Response({'message': f'Заявка {num} не может быть обработана, обратитесь в поддержку'}, status=status.HTTP_409_CONFLICT)

		