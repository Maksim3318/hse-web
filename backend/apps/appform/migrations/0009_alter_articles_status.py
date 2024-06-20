from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0008_alter_articles_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='status',
            field=models.CharField(blank=True, choices=[('На рассмотрении', 'На рассмотрении'), ('В обработке', 'В обработке'), ('В работе', 'В работе'), ('Ожидает получения', 'Ожидает получения'), ('Отклонен', 'Отклонен'), ('Выполнен', 'Выполнен')], default='На рассмотрении', max_length=30, verbose_name='Статус заказа'),
        ),
    ]
