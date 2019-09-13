exports.seed = function (knex, Promise) {
    return knex('resources').insert([
        { resourceName: 'A person', resourceDescription: 'This guy will help you get stuff done.' },
        { resourceName: 'Stapler', resourceDescription: 'If you dont know what this does then I cant help you.' },
        { resourceName: 'Coffee Cup', resourceDescription: 'Give me the JOE GIVE ME THE JOE!' },
        { resourceName: 'Shoes', resourceDescription: 'Why dont you have shoes already?' },
        { resourceName: 'Meeting Room', resourceDescription: 'Your company only has one meeting room, so sad.' },
        { resourceName: 'Software License', resourceDescription: 'Free windows!' }
    ]);
};