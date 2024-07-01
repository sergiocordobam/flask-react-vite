from flask import Flask
from blueprints.cars.main_cars import cars_bp
from blueprints.products.main_products import products_bp

app = Flask(__name__)
app.register_blueprint(cars_bp, url_prefix="/cars")
app.register_blueprint(products_bp, url_prefix="/products")

if __name__ == "__main__":
    app.run(debug=True)