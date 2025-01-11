from pymongo import MongoClient
from config import Config

# Khởi tạo MongoClient
mongo = MongoClient(Config.MONGO_URI)
db = mongo['GoldenOwnAsia']

# Khởi tạo Elasticsearch

