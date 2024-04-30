from django.db import models


# Create your models here.

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    registration_number = models.CharField(max_length=200)
    email = models.EmailField()
    course = models.CharField(max_length=200)

    def __str__(self):
        return "Student Name: {} {}".format(self.first_name, self.last_name)
