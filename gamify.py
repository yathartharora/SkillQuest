from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


def store_data(file_path,data):

    if os.path.isfile(file_path):
        df = pd.read_excel(file_path)
        print("Excel file exists. Data loaded successfully.")
    else:
        df = pd.DataFrame()
        print("Excel file does not exist. Creating new file.")
    
    new_data = {
    'FirstName': data['firstname'],
    'LastName': data['lastname'],
    'Salary': data['link'],
    'Schooling': data['schools'],
    'Experience': data['experience']
    }
    df = df.append(pd.DataFrame(new_data))
    df.to_excel(file_path)
    print("File created at",file_path)

    return 1



@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    # firstname = data['firstname']
    # lastname = data['lastname']
    # link = data['link']
    # schools = data['schools']
    # experience = data['experience']
    
    # print(firstname,lastname,link)
    # print(schools, experience)

    res = store_data('./ResumeData.xlsx',data)

    if res ==1:
        return jsonify({'message': 'Data has been submitted successfully'})
    else:
        return jsonify({'message': 'Error in storing data'})


if __name__ == '__main__':
    app.run(debug=True)
