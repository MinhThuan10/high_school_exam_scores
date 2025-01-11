from flask import Blueprint, render_template, jsonify
from app.extensions import db


main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/search')
def search():
    return render_template('index.html')

@main.route('/search&regNumber=<sbd>', methods=['GET'])
def search_idnumber(sbd):
    student = db.test_score.find_one({'sbd': int(sbd)})
    if student:
        if '_id' in student:
            student['_id'] = str(student['_id']) 
        return jsonify(success = True, student = student, message = "thành công")
    else:
        print("Số báo danh không tồn tại")
        return jsonify(success = False, message = "Số báo danh không tồn tại") 






@main.route('/setting')
def setting():
    return render_template('settings.html')
