const db = require('../config/db');

class CharityReview {
  static async addReview({ charity_center_id, admin_id, status, reason }) {
    await db.execute(
      `INSERT INTO charity_center_reviews (charity_center_id, admin_id, status, reason) 
       VALUES (?, ?, ?, ?)`,
      [charity_center_id, admin_id, status, reason]
    );
  }

  static async getReviewsByCenter(center_id) {
    const [rows] = await db.execute(`SELECT * FROM charity_center_reviews WHERE charity_center_id = ?`, [center_id]);
    return rows;
  }
}

module.exports = CharityReview;
