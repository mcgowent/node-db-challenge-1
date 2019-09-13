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
    db.get('tasks')
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

router.get('/:id', (req, res) => {
    const { id } = req.params

    db.getProjectById(id)
        .then(data => {

            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Project' });
        });
})

module.exports = router;