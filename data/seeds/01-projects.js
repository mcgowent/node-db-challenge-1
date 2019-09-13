exports.seed = function (knex, Promise) {
    return knex('projects').insert([
        { projectName: 'Project #1', projectDescription: '#1 In this project we will look at running a seed data and hope it works first try', projectCompleted: true },
        { projectName: 'Project #2', projectDescription: '#2 In this project we will look at running a seed data and hope it works first try', projectCompleted: false },
        { projectName: 'Project #3', projectDescription: '#3 In this project we will look at running a seed data and hope it works first try', projectCompleted: true },
        { projectName: 'Project #4', projectDescription: '#4 In this project we will look at running a seed data and hope it works first try', projectCompleted: false },
        { projectName: 'Project #5', projectDescription: '#5 In this project we will look at running a seed data and hope it works first try', projectCompleted: true },
        { projectName: 'Project #6', projectDescription: '#6 In this project we will look at running a seed data and hope it works first try', projectCompleted: false },
    ]);
};