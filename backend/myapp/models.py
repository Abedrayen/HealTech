# myapp/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # You can add additional fields here if needed
    pass

class DiabetesEntry(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    pregnancies = models.IntegerField()
    glucose = models.FloatField()
    blood_pressure = models.FloatField()
    skin_thickness = models.FloatField()
    insulin = models.FloatField()
    bmi = models.FloatField()
    diabetes_pedigree = models.FloatField()
    age = models.IntegerField()
    prediction_result = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'DiabetesEntry for {self.user.username} at {self.timestamp}'

class HeartDiseaseEntry(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    age = models.IntegerField()
    sex = models.IntegerField()
    cp = models.IntegerField()
    trestbps = models.IntegerField()
    chol = models.IntegerField()
    fbs = models.IntegerField()
    restecg = models.IntegerField()
    thalach = models.IntegerField()
    exang = models.IntegerField()
    oldpeak = models.FloatField()
    slope = models.IntegerField()
    ca = models.IntegerField()
    thal = models.IntegerField()
    prediction_result = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'HeartDiseaseEntry for {self.user.username} at {self.timestamp}'
class DiseasePredictionModel:
    def predict(self, data):
        result = "Disease Prediction Result"
        symptoms = ["Symptom 1", "Symptom 2"]
        return result, symptoms


class ChestXRayPredictionModel:
    def predict(self, image_file):
        result = "Chest X-ray Prediction Result"
        return result