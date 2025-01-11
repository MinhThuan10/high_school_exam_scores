from app.extensions import db
from pymongo import DESCENDING

class report_top10():
    def get_top10_students():
        students = list(db.test_score.aggregate([
            {
                "$project": {
                    "sbd": 1,
                    "toan": 1,
                    "vat_li": 1,
                    "hoa_hoc": 1,
                    "total_a": {
                        "$add": ["$toan", "$vat_li", "$hoa_hoc"]
                    }
                }
            },
            {"$sort": {"total_a": DESCENDING}},
            {"$limit": 10}
        ]))

        return students