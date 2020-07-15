const express = require('express');
const router = express.Router();
const Projects = require('../models/project')
const seed = require('../db/seed.json');

router.get('/seed', async (req, res) => {
    await Projects.deleteMany({})
    Projects.insertMany(seed, (err, items) => {
        if (err) console.log(err)
        else res.send(items)
    })
});

router.get('/', (req, res) => {
    Projects.find({}, (err, allProjects) => {
        if (err) console.log(err)
        else res.send(allProjects)
    })
});

router.post('/', (req, res) => {
    Projects.create(req.body, (error, createdProject) => {
        res.send(createdProject);
    });
});

router.delete('/:id', (req, res) => {
    Projects.findByIdAndDelete(req.params.id, (err, deletedProject) => {
        if (err) console.log(err)
        else res.send(deletedProject)
    })
});

router.put('/:id', (req, res) => {
    // get data from the user / client
    Projects.findByIdAndUpdate(req.params.id, req.body, (err, updatedProject) => {
        if (err) console.log(err)
        else res.send(updatedProject)
    })
});

module.exports = router