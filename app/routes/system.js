const express = require("express");
const router = express.Router();
const os = require("os");

router.get("/", (req, res) => {
	res.json({
		hostname: os.hostname(),
		platform: os.platform(),
		architecture: os.arch(),
		nodeVersion: process.version,
		uptime: os.uptime(),
		memory: {
			total: os.totalmem(),
			free: os.freemem()
		}
	});
});

module.exports = router;
