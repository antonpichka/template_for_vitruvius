const router = require("express").Router();

router.post("/submit", (req, res) => {
    res.status(200).json({
        timestamp : new Date().toLocaleString(),
        message : `Form submitted with data: ${JSON.stringify(req.body)}`
    });
});

module.exports = router;