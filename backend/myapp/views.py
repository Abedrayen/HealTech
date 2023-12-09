# myapp/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from .forms import SignUpForm, SignInForm, DiabetesPredictionForm, HeartDiseasePredictionForm
from .models import DiabetesEntry, HeartDiseaseEntry
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load the Pima Indians Diabetes Database dataset
diabetes_data = pd.read_csv('datasets/diabetes.csv')

# Separate features (X) and labels (y) for diabetes prediction
X_diabetes = diabetes_data.drop('Outcome', axis=1)
y_diabetes = diabetes_data['Outcome']

# Split data into training and testing sets for diabetes prediction
X_diabetes_train, X_diabetes_test, y_diabetes_train, y_diabetes_test = train_test_split(X_diabetes, y_diabetes, test_size=0.2)

# Create a Random Forest classifier for diabetes prediction
diabetes_classifier = RandomForestClassifier(n_estimators=100)
diabetes_classifier.fit(X_diabetes_train, y_diabetes_train)

# Load the pre-trained KNN model for heart disease prediction
heart_disease_classifier = KNeighborsClassifier(n_neighbors=5, metric='manhattan')

@login_required
def predict_diabetes(request):
    result = None

    if request.method == 'POST':
        form = DiabetesPredictionForm(request.POST)
        if form.is_valid():
            # Get form data
            data = form.cleaned_data
            X_diabetes_pred = pd.DataFrame([data])

            # Make prediction
            prediction = diabetes_classifier.predict(X_diabetes_pred)

            # Set result based on prediction
            result = "Likely diabetic." if prediction[0] == 1 else "Likely not diabetic."

            # Save entry to the database
            if request.user.is_authenticated:
                entry = DiabetesEntry.objects.create(
                    user=request.user,
                    pregnancies=data['pregnancies'],
                    glucose=data['glucose'],
                    blood_pressure=data['blood_pressure'],
                    skin_thickness=data['skin_thickness'],
                    insulin=data['insulin'],
                    bmi=data['bmi'],
                    diabetes_pedigree=data['diabetes_pedigree'],
                    age=data['age'],
                    prediction_result=result
                )

    else:
        form = DiabetesPredictionForm()

    return render(request, 'predict_diabetes.html', {'form': form, 'result': result})

@login_required
def predict_heart_disease(request):
    result = None

    if request.method == 'POST':
        form = HeartDiseasePredictionForm(request.POST)
        if form.is_valid():
            # Get form data
            data = form.cleaned_data
            X_heart_disease_pred = pd.DataFrame([data])

            # Make prediction
            prediction = heart_disease_classifier.predict(X_heart_disease_pred)

            # Set result based on prediction
            result = "Heart Disease" if prediction[0] == 1 else "No Heart Disease."

            # Save entry to the database
            if request.user.is_authenticated:
                entry = HeartDiseaseEntry.objects.create(
                    user=request.user,
                    age=data['age'],
                    sex=data['sex'],
                    cp=data['cp'],
                    trestbps=data['trestbps'],
                    chol=data['chol'],
                    fbs=data['fbs'],
                    restecg=data['restecg'],
                    thalach=data['thalach'],
                    exang=data['exang'],
                    oldpeak=data['oldpeak'],
                    slope=data['slope'],
                    ca=data['ca'],
                    thal=data['thal'],
                    prediction_result=result
                )

    else:
        form = HeartDiseasePredictionForm()

    return render(request, 'predict_heart_disease.html', {'form': form, 'result': result})
from django.shortcuts import render
from django.http import JsonResponse
from .models import DiseasePredictionModel, ChestXRayPredictionModel

def predict_disease(request):
    if request.method == 'POST':
        data = request.POST.get('your_data_key', default='')  # Replace 'your_data_key'
        disease_model = DiseasePredictionModel()  # Initialize your disease prediction model
        prediction, symptoms = disease_model.predict(data)
        return JsonResponse({'prediction': prediction, 'symptoms': symptoms})

    return JsonResponse({'error': 'Invalid request method'})

def predict_chest_xray(request):
    if request.method == 'POST':
        image_file = request.FILES.get('your_image_key')  # Replace 'your_image_key'
        xray_model = ChestXRayPredictionModel()  # Initialize your chest X-ray prediction model
        prediction = xray_model.predict(image_file)
        return JsonResponse({'prediction': prediction})

    return JsonResponse({'error': 'Invalid request method'})