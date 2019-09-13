const db = require('../data/db-config.js');

module.exports = {
    get,
    add
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