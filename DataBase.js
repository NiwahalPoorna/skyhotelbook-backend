const express = require('express');
const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://hirupoorna:hiru21434@hotelbookingwebapp.lvt2ptn.mongodb.net/HotelBookingWebApp?retryWrites=true&w=majority', (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded..');
        }
        else {
            console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2))
        }
    });
}
catch (e) {
    throw e;
}


module.exports = mongoose;