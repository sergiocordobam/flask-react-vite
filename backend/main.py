from flask import Flask
from blueprints.cars.main_cars import cars_bp
from blueprints.products.main_products import products_bp
from blueprints.cdt.main_cdt import cdt_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(cars_bp, url_prefix="/cars")
app.register_blueprint(products_bp, url_prefix="/products")
app.register_blueprint(cdt_bp, url_prefix="/cdt")

if __name__ == "__main__":
    app.run(debug=True)