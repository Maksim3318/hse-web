from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appform', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articles',
            name='group',
        ),
        migrations.AddField(
            model_name='articles',
            name='comment',
            field=models.CharField(default='no', max_length=500, verbose_name='Комментарий к заявке'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='course',
            field=models.CharField(choices=[('FB', '1 курс'), ('SB', '2 курс'), ('TB', '3 курс'), ('FB', '4 курс'), ('FM', '1 курс (магистратура)'), ('SM', '2 курс (магистратура)'), ('A', 'Аспирантура'), ('E', 'Сотрудник')], default='no', max_length=2, verbose_name='Курс'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='mail',
            field=models.CharField(default='no', max_length=100, verbose_name='Электронная почта'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='op',
            field=models.CharField(choices=[('IVT', 'ИВТ'), ('ITSS', 'ИТСС'), ('KB', 'КБ'), ('PM', 'ПМ'), ('IB', 'ИБ'), ('AN', 'Другое')], default='no', max_length=4, verbose_name='ОП'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='phone',
            field=models.CharField(default='no', max_length=12, verbose_name='Телефон'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='project_name',
            field=models.CharField(default='no', max_length=50, verbose_name='Название проекта или КР/ВКР'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='articles',
            name='teach_name',
            field=models.CharField(default='no', max_length=50, verbose_name='ФИО Научного руководителя'),
            preserve_default=False,
        ),
    ]
