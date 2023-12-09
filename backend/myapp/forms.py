# myapp/forms.py
from django import forms
from .models import DiabetesEntry
from .models import HeartDiseaseEntry
class SignUpForm(forms.Form):
    username = forms.CharField(label='Username', max_length=30)
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

class SignInForm(forms.Form):
    username = forms.CharField(label='Username', max_length=30)
    password = forms.CharField(label='Password', widget=forms.PasswordInput)

class DiabetesPredictionForm(forms.Form):
    pregnancies = forms.IntegerField(label='Number of pregnancies')
    glucose = forms.FloatField(label='Plasma glucose concentration')
    blood_pressure = forms.FloatField(label='Diastolic blood pressure')
    skin_thickness = forms.FloatField(label='Triceps skin fold thickness')
    insulin = forms.FloatField(label='2-Hour serum insulin')
    bmi = forms.FloatField(label='BMI')
    diabetes_pedigree = forms.FloatField(label='Diabetes pedigree function')
    age = forms.IntegerField(label='Age')

    def save_to_database(self, user, prediction_result):
        data = self.cleaned_data
        DiabetesEntry.objects.create(
            user=user,
            pregnancies=data['pregnancies'],
            glucose=data['glucose'],
            blood_pressure=data['blood_pressure'],
            skin_thickness=data['skin_thickness'],
            insulin=data['insulin'],
            bmi=data['bmi'],
            diabetes_pedigree=data['diabetes_pedigree'],
            age=data['age'],
            prediction_result=prediction_result
        )
class HeartDiseasePredictionForm(forms.ModelForm):
    class Meta:
        model = HeartDiseaseEntry
        exclude = ['user', 'prediction_result', 'timestamp']        