from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0005_alter_articles_options_alter_articles_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='articles',
            name='status',
            field=models.CharField(default='На рассмотрении', max_length=30, verbose_name='Комментарий к заявке'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='comment',
            field=models.CharField(blank=True, max_length=500, verbose_name='Комментарий к заявке'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='mail',
            field=models.EmailField(max_length=100, verbose_name='Электронная почта'),
        ),
    ]
