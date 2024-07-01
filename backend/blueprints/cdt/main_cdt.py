from flask import Blueprint, request, jsonify

cdt_bp = Blueprint("cdt", __name__)

@cdt_bp.route("/")
def index():
    return "This is the CDT index"

@cdt_bp.route("/form", methods=['POST'])
def form():
    data = request.get_json()
    initial_amount = float(data['initial_amount'])
    annual_interest_rate = float(data['annual_interest_rate'])
    years = int(data['years'])
    compounding_frequency = int(data['compounding_frequency'])

    rate = annual_interest_rate / 100
    total_amount = initial_amount * (1 + rate / compounding_frequency) ** (compounding_frequency * years)
    profit = total_amount - initial_amount

    return jsonify({
        'total_amount': total_amount,
        'profit': profit
    })


