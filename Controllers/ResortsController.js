const express = require('express');
var router = express.Router();

var { Resorts } = require('../Models/Resorts');

router.get(`/`, async (req, res) => {
    const resorts = await Resorts.find();

    if (!resorts) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(resorts);
})

router.get('/single/:resortsid', async (req, res) => {
    const resorts = await Resorts.findById(req.params.id);

    if (!resorts) {
        res.status(500).json({ message: 'The Client with the given ID was not found.' })
    }
    res.status(200).send(resorts);
})

router.post('/', async (req, res) => {
    let resorts = new Resorts({
        resortsid: req.body.resortsid,
        description: req.body.description,
        price: req.body.price,
        title: req.body.title,
        location: req.body.location,
        image: req.body.image,
    })
    resorts = await resorts.save();

    if (!resorts)
        return res.status(400).send('the Admin cannot be created!')

    res.send(resorts);
})

module.exports = router;