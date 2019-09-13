const db = require('../data/db-config.js');

module.exports = {
    get,
    add,
    getTasks,
    // getProjectById,
    // getById,
    // getProjectResources,
    // getProjectTasks

}

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function get(table) {
    return db(table)
}

function add(table, load) {
    return db(table).insert(load)
}

function getTasks() {
    return db('projects as p').join('tasks as t', 't.project_id', 'p.id').select('p.projectName', 't.taskDescription', 't.taskCompleted')
}

// return project projectName, and taskDescription


function getById(id) {
    return db('projects').where({ id: id }).first()
}

// function getProjectById(id) {
//     return db('projects as p')
//         .join('tasks as t', 't.project_id', 'p.id')
//         .where({ project_id: id })
//         .select('t.taskDescription', 'p.id', 'p.projectName', 'p.projectDescription', 'p.projectCompleted')

// }

// function getProjectById(id) {
//     return db('projects').then(data => {
//         db('projects as p')
//             .join('tasks as t', 't.project_id', 'p.id')
//             .where({ project_id: id })
//             .select('t.taskDescription', 'p.id', 'p.projectName', 'p.projectDescription', 'p.projectCompleted').then(data2 => {
//                 res.render('test', {
//                     projects: data,
//                     tasks: tasks
//                 })
//             })
//     }
// }

// function getProjectResources(project_id) {
//     if (!project_id) return false;
//     else return db('projects_resources')
//         .where({ project_id })
//         .join('resources', 'projects_resources.resource_id', 'resources.id')
//         .orderBy('projects_resources.resource_id');
// }

// async function getProjectTasks(project_id) {
//     if (!project_id) return false;
//     else {
//         let project = await db('projects').where({ id: project_id });
//         if (!project) return false;
//         project = project.first();
//         project.projectCompleted = project.projectCompleted === 1;
//         project.tasks = await db('tasks').where({ project_id });
//         project.resources = await getProjectResources(project_id);
//         console.log('Resources: ', project.resources);
//         return project;
//     }
// }
// const thing = [{ tasks }, { resources }]

// function getTasks(id) {
//     db('tasks').then(data => {
//         thing.task = data
//     })
// }
// function getResources(id) {
//     db('resources').then(data => {
//         thing.resources = data
//     })
// }