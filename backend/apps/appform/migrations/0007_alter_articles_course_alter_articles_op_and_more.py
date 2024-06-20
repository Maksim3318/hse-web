from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0006_articles_status_alter_articles_comment_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='course',
            field=models.CharField(choices=[('1 курс', '1 курс'), ('2 курс', '2 курс'), ('3 курс', '3 курс'), ('4 курс', '4 курс'), ('1 курс (магистратура)', '1 курс (магистратура)'), ('2 курс (магистратура)', '2 курс (магистратура)'), ('Аспирантура', 'Аспирантура'), ('Сотрудник', 'Сотрудник')], max_length=25, verbose_name='Курс'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='op',
            field=models.CharField(choices=[('ИВТ', 'ИВТ'), ('ИТСС', 'ИТСС'), ('КБ', 'КБ'), ('ПМ', 'ПМ'), ('ИБ', 'ИБ'), ('Другое', 'Другое')], max_length=6, verbose_name='ОП'),
        ),
        migrations.AlterField(
            model_name='articles',
            name='status',
            field=models.CharField(choices=[('На рассмотрении', 'На рассмотрении'), ('В обработке', 'В обработке'), ('В работе', 'В работе'), ('Ожидает получения', 'Ожидает получения'), ('Отклонен', 'Отклонен')], default='На рассмотрении', max_length=30, verbose_name='Статус заказа'),
        ),
    ]
