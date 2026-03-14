const pool = require("../db");

exports.listMessages = async (req, res) => {

  const { channelId } = req.params;
  const { limit = 50 } = req.query;

  try {

    const query = `
      SELECT *
      FROM messages
      WHERE channel_id = $1
      ORDER BY created_at DESC
      LIMIT $2
    `;

    const result = await pool.query(query, [channelId, limit]);

    res.json(result.rows);

  } catch (err) {

    console.error(err);
    res.status(500).json({ error: "Database error" });

  }

};