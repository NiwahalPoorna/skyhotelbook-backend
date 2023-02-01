const mongoose = require('mongoose');

const resortsSchema = mongoose.Schema({
    // resortsid: {
    //     type: Number,
    //     required: true,
    // },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    image: {
        type: String,
    },

})

exports.Resorts = mongoose.model('Resorts', resortsSchema);