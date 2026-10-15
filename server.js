const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
    res.json({
        name: "JARVIS",
        status: "online"
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/chat", (req, res) => {
    const message = req.body?.message;

    if (!message) {
        return res.status(400).json({
            error: "Message likho."
        });
    }

    res.json({
        reply: "Hello! JARVIS server connected successfully. Tumne likha: " + message
    });
});

app.listen(PORT, () => {
    console.log("JARVIS is running on port " + PORT);
});
