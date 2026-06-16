const express = require("express");
const router = express.Router();
const config = require("../config");

router.get("/", (req, res) => {
	res.json({
		appName: config.appName,
	        version: config.version,
        	environment: config.environment,
	        buildNumber: config.buildNumber,
	        commitHash: config.commitHash,
	        deployTime: config.deployTime,
	        status: "healthy"
    });
});

module.exports = router;
