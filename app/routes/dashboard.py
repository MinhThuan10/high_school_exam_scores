from flask import Blueprint, render_template, jsonify
from app.models.dashboard import subject


dashboard = Blueprint('dashboard', __name__)

@dashboard.route('/dashboard')
def dashboard_chart():
    return render_template('dashboard.html')

@dashboard.route('/api/dashboard', methods=['GET'])
def api_dashboard_chart():
    toan = subject.subject_statistics('toan')
    ngu_van = subject.subject_statistics('ngu_van')
    ngoai_ngu = subject.subject_statistics('ngoai_ngu')
    vat_li = subject.subject_statistics('vat_li')
    hoa_hoc = subject.subject_statistics('hoa_hoc')
    sinh_hoc = subject.subject_statistics('sinh_hoc')
    lich_su = subject.subject_statistics('lich_su')
    dia_li = subject.subject_statistics('dia_li')
    gdcd = subject.subject_statistics('gdcd')

    return jsonify(success = True, toan = toan, ngu_van = ngu_van, ngoai_ngu = ngoai_ngu, vat_li = vat_li, hoa_hoc = hoa_hoc, sinh_hoc = sinh_hoc, lich_su = lich_su, dia_li = dia_li, gdcd = gdcd,  message = "thành công")
