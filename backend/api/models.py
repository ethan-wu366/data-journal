from django.db import models

# Create your models here.

class Journal(models.Model):
    title = models.CharField(max_length=70, blank=False)
    rating = models.IntegerField()
    entry = models.CharField(max_length=100000)

    