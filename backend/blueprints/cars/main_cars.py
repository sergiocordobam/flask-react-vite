from flask import Blueprint, jsonify

cars_bp = Blueprint("cars", __name__)

@cars_bp.route("/")
def index():
    return "This is the car index"

@cars_bp.route("/list_cars")
def list_cars():
    return jsonify({
        'cars': 'Mazda, Renault, Chevrolet'
    })