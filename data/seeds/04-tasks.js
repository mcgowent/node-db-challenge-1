exports.seed = function (knex, Promise) {
    return knex('tasks').insert([
        { project_id: 1, taskDescription: "1#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 1, taskDescription: "1#2 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 1, taskDescription: "1#3 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 2, taskDescription: "2#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 2, taskDescription: "2#2 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 3, taskDescription: "3#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 3, taskDescription: "3#2 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 4, taskDescription: "4#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 4, taskDescription: "4#2 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 5, taskDescription: "5#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 6, taskDescription: "6#1 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 6, taskDescription: "6#2 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
        { project_id: 6, taskDescription: "6#3 Start Here then do this", notes: "This was too hard of a task", taskCompleted: false },
    ]);
};