

const express = require("express")
const router = express.Router()
const Target = require('../models/targets')

// home page
router.get('/', (req, res) => {
    Target.find().then((data) => {
        res.render("index.ejs", {
            target: data,
        })
    }).catch(err => console.log(err));
});

// add targets
router.post('/add',async (req, res) => {
    const target = new Target({
        todo: req.body.toDo,
        date: req.body.date
    });
    // console.log(target.todo);
    await target.save().then(()=>res.redirect("/")).catch(err => console.log(err));
});

// delete target from todo list
router.get('/delete/:id',async (req,res) => {
    const id = req.params.id;
    await Target.findByIdAndRemove(id).then(()=>res.redirect("/")).catch(err => console.log(err));
});

// router.get("/", (req,res) => {
//     res.render('/index.ejs', {title : "My To-Do"});
// })

module.exports = router; 