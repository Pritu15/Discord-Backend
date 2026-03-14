const express = require("express");
const router = express.Router();

const { listMessages } = require("../controllers/messageController");

router.get("/:channelId", listMessages);

module.exports = router;