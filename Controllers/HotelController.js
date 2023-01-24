const express = require('express');
var router = express.Router();

var { Hotels } = require('../Models/Hotel');

router.get(`/`, async (req, res) => {
    const hotels = await Hotels.find();

    if (!hotels) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(hotels);
})

router.get('/:id', async (req, res) => {
    const hotels = await Hotels.findById(req.params.id);

    if (!hotels) {
        res.status(500).json({ message: 'The Client with the given ID was not found.' })
    }
    res.status(200).send(hotels);
})

router.post('/', async (req, res) => {
    let hotels = new Hotels({
        // hotelid: req.body.hotelid,
        description: req.body.description,
        price: req.body.price,
        title: req.body.title,
        location: req.body.location,
        image: req.body.image,
    })
    hotels = await hotels.save();

    if (!hotels)
        return res.status(400).send('the Admin cannot be created!')

    res.send(hotels);
})

module.exports = router;