from rest_framework import serializers
from .models import Articles

class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Articles
		fields = ['number',	'mail',	'name',	'op', 'course',	'project_name', 'teach_name', 'phone', 'dmodel', 'note', 'comment', 'status']