const express = require("express")
const app = express()
const User = require("../models/User")

app.get("/:id", (req, res) => {
    User.findByIdAndDelete(req.session.currentUser._id)
        .then(() => {
            debugger
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

module.exports = app