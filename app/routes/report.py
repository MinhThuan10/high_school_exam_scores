from flask import Blueprint, render_template, jsonify
from app.models.report import report_top10

report = Blueprint('report', __name__)

@report.route('/report')
def dashboard():
    return render_template('reports.html')

@report.route('/api/report', methods=['GET'])
def api_report_top1_A():
    # Truy vấn MongoDB
    students = report_top10.get_top10_students()
    for student in students:
        student['_id'] = str(student['_id'])
    # Trả về JSON
    return jsonify(success=True, students=students)