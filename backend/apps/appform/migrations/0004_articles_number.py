from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0003_articles_dmodel_articles_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='articles',
            name='number',
            field=models.CharField(default='LxctK', max_length=6, unique=True, verbose_name='Номер заявки'),
        ),
    ]
