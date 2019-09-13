const express = require('express');
const db = require('./projectHelpers');
const router = express.Router();

// Returns a list of all projects in the database
router.get('/', (req, res) => {
    db.get('projects')
        .then(data => {
            data.map(e => {
                if (!e.projectCompleted) {
                    return e.projectCompleted = "False"
                } else if (e.projectCompleted) {
                    return e.projectCompleted = "True"
                } else {
                    return e;
                }
            })
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})

router.get('/tasks', (req, res) => {
    db.getTasks('tasks')
        .then(data => {
            data.map(e => {
                if (!e.projectCompleted) {
                    return e.taskCompleted = "False"
                } else if (e.taskCompleted) {
                    return e.taskCompleted = "True"
                } else {
                    return e;
                }
            })
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
})

router.get('/resources', (req, res) => {
    db.get('resources')
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
})


// Adds 
router.post('/', (req, res) => {
    const load = req.body
    db.add('projects', load)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})

router.post('/tasks', (req, res) => {
    const load = req.body
    db.add('tasks', load)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
})

router.post('/resources', (req, res) => {
    const load = req.body
    db.add('resources', load)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
})


/**===========Stretch======================== */
// Gets basic data about a project
router.get('/:id', (req, res) => {
    const { id } = req.params

    db.getById(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Full Project' });
        });
})
// Gets Full data about a project
router.get('/:id/full', (req, res) => {
    // I need to create a var that holds three db calls
    // I need to make those calls
    console.log('I was called.')
    const { id } = req.params
    db.getById(id)
        .then(project => {
            let projectFull = project
            console.log('PROJECTFULL AT THE START:', projectFull)
            console.log('Projects Object', project)
            db.getTasksList(id)
                .then(tasks => {
                    projectFull.tasks = tasks
                    console.log('Tasks Object', tasks)
                    db.getResources(id)
                        .then(resources => {
                            projectFull.resources = resources
                            console.log('Resources Object', resources)
                            console.log('AT THE END OF THE ARRAY projectFULL:', projectFull)
                            res.json(projectFull)
                        })
                })
        })
        .catch(err => {
            res.status(500).json(err)
        })


})

module.exports = router;