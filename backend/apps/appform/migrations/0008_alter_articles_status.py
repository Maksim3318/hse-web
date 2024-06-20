from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0007_alter_articles_course_alter_articles_op_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='status',
            field=models.CharField(blank=True, choices=[('На рассмотрении', 'На рассмотрении'), ('В обработке', 'В обработке'), ('В работе', 'В работе'), ('Ожидает получения', 'Ожидает получения'), ('Отклонен', 'Отклонен')], default='На рассмотрении', max_length=30, verbose_name='Статус заказа'),
        ),
    ]
