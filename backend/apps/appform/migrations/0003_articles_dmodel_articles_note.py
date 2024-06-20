from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0002_remove_articles_group_articles_comment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='articles',
            name='dmodel',
            field=models.FileField(default='', upload_to='3dmodels/', verbose_name='3D модель'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='note',
            field=models.FileField(default='', upload_to='notes/', verbose_name='Скан служебной записки'),
            preserve_default=False,
        ),
    ]
