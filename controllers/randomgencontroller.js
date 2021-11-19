const mongoose = require('mongoose');
const model = require('../models/mongoschema');

const getAllQuotes = async (req, res) => {
    try {
        const quote = await model.find({})
        console.log(quote);
        res.status(200).json({ quote })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
}

const createQuotes = async (req, res) => {
    try {
        console.log(req.body)
        const quote = await model.create(req.body)
        res.status(201).json({ quote })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: error.message })
    }
}

const getRandomQuotes = async (req, res) => {
    try {
        const quote = await model.find({})
        var randQuote = quote[Math.floor(Math.random()*quote.length)]
        res.status(200).json({ randQuote })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllQuotes,
    createQuotes,
    getRandomQuotes
}