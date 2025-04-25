const db = require('../config/db');

class CharityCenter {
  static async create({ name, address, mission, category, verification_documents, mpesa_number, bank_account_number, bank_name, swift_code }) {
    const [result] = await db.execute(
      `INSERT INTO charity_centers (name, address, mission, category, verification_documents, mpesa_number, bank_account_number, bank_name, swift_code) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, address, mission, category, verification_documents, mpesa_number, bank_account_number, bank_name, swift_code]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await db.execute(`SELECT * FROM charity_centers WHERE id = ?`, [id]);
    return rows[0];
  }

  static async getPendingCenters() {
    const [rows] = await db.execute(`SELECT * FROM charity_centers WHERE verified = FALSE`);
    return rows;
  }

  static async updateStatus(id, verified) {
    await db.execute(`UPDATE charity_centers SET verified = ? WHERE id = ?`, [verified, id]);
  }
}

module.exports = CharityCenter;
