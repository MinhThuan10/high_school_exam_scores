# app/__init__.py
from flask import Flask
from flask_pymongo import PyMongo
from config import Config
from .routes import register_blueprints 
mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    mongo.init_app(app)

    register_blueprints(app)

    return app
