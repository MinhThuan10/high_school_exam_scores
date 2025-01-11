from app.extensions import db

class subject():
    def subject_statistics(subject):
        subject_0_4 = db.test_score.count_documents({subject: {"$gte": 0, "$lt": 4}})
        subject_4_6 = db.test_score.count_documents({subject: {"$gte": 4, "$lt": 6}})
        subject_6_8 = db.test_score.count_documents({subject: {"$gte": 6, "$lt": 8}})
        subject_8_10 = db.test_score.count_documents({subject: {"$gte": 8, "$lte": 10}})
        
        return [subject_0_4, subject_4_6, subject_6_8, subject_8_10]