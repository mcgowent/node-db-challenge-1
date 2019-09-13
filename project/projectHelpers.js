const db = require('../data/db-config.js');

module.exports = {
    get,
    add,
    getTasks,
    getTasksList,
    getResources,
    getById

}

// gets
function get(table) {
    return db(table)
}
// adds
function add(table, load) {
    return db(table).insert(load)
}
// Grabs the Task list with the name of the projects
function getTasks() {
    return db('projects as p').join('tasks as t', 't.project_id', 'p.id').select('p.projectName', 't.taskDescription', 't.taskCompleted')
}

function getById(id) {
    return db('projects').where({ id: id }).first()
}


function getTasksList(id) {
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.id')
        .where({ project_id: id })
        .select('t.id', 't.taskDescription', 't.notes', 't.taskCompleted')
}

function getResources(id) {
    return db('projects_resources as pr')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .where({ resource_id: id })
        .select('r.id', 'r.resourceName', 'r.resourceDescription')
}