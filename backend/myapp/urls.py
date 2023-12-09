# myapp/urls.py
from django.urls import path
from .views import predict_diabetes, predict_heart_disease, predict_disease, predict_chest_xray

urlpatterns = [
    path('predict-diabetes/', predict_diabetes, name='predict_diabetes'),
    path('predict-heart-disease/', predict_heart_disease, name='predict_heart_disease'),
    path('predict_disease/', predict_disease, name='predict_disease'),
    path('predict_chest_xray/', predict_chest_xray, name='predict_chest_xray'),
    # Add other app URLs as needed
]
