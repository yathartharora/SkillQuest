from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    firstname = data['firstname']
    lastname = data['lastname']
    link = data['link']
    
    print(firstname,lastname,link)
    
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
