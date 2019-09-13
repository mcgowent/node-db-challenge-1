
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()

            tbl.string('projectName').notNullable()
            tbl.string('projectDescription')
            tbl.boolean('projectCompleted').defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments()

            tbl.string('resourceName').notNullable()
            tbl.string('resourceDescription')
        })

        .createTable('projects_resources', tbl => {
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl.primary(['project_id', 'resource_id'])
        })
        .createTable('tasks', tbl => {
            tbl.increments()

            tbl.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')


            tbl.string('taskDescription').notNullable()
            tbl.string('notes')
            tbl.boolean('taskCompleted').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
};
