from flask import Blueprint, redirect, url_for

products_bp = Blueprint("products", __name__)

@products_bp.route("/")
def index():
    return "This is the products index"

@products_bp.route("/list_products")
def list_products():
    return "Product1, Product2, Product3"

@products_bp.route("/go_to_cars")
def go_to_cars():
    return redirect(url_for("cars.list_cars"))