const express = require("express");
const app = express();
const Child = require("../models/Child");
const createError = require('http-errors');

app.get("/:day", (req, res) => {
    Child.find({availabledays: req.params.day})
    .populate("caretaker")
    .then(friends => {
        friends.filter((friend)=> returnfriend.caretaker.availabledays.includes(req.params.day)
        })
        res.render("friends/friendsbyday", {friends});
    })
    .catch(error => {
        next(error);
    });
});

module.exports = app;