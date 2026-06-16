const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const healthRoute = require("./routes/health");
const statusRoute = require("./routes/status");
const systemRoute = require("./routes/system");
const path = require("path");

app.get("/", (req, res) => {
	res.send("Deploy is running");
});

app.use("/health", healthRoute);
app.use("/api/status", statusRoute);
app.use("/api/system", systemRoute);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
