import apps.appform.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0004_articles_number'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='articles',
            options={'verbose_name': 'Заявку', 'verbose_name_plural': 'Заявки'},
        ),
        migrations.AlterField(
            model_name='articles',
            name='number',
            field=models.CharField(default=apps.appform.models.func, max_length=20, unique=True, verbose_name='Номер заявки'),
        ),
    ]
