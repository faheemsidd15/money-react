var express = require('express');
var router = express.Router();

router.get('/api/customers', (req, res) => {

    const customers = [
        { id: "0", firstname: "Mohammad", lastname: "Al-Abbasi" },
        { id: "1", firstname: "Faheem", lastname: "Siddiqui" }
    ]
    res.json(customers)
})

module.exports = router;