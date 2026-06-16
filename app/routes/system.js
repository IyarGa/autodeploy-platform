const express = require("express");
const router = express.Router();
const os = require("os");

router.get("/", (req, res) => {
	res.json({
		hostname: os.hostname()
	});
});

module.exports = router;
