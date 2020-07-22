const mongoose = require('../db/connection.js');

const projectsSchema = new mongoose.Schema({
    name: String,
    urlLive: String,
    urlGit: String,
    description: String
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;