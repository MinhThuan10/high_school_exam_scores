# app/routes/__init__.py
# Import các route
from .main import main
from .dashboard import dashboard
from .report import report

from flask import Blueprint

# Tạo blueprint cho main
blueprints = [main, dashboard, report]

def register_blueprints(app):
    for bp in blueprints:
        app.register_blueprint(bp)