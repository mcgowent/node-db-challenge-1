const express = require('express');
const db = require('./projectHelpers');
const router = express.Router();

// Returns a list of all projects in the database
router.get('/', (req, res) => {
    db.get('projects')
        .then(data => {
            if (!data.projectCompleted) {
                data.projectCompleted = 'False'
                res.json(data);
            } else {
                data.projectCompleted = 'True'
                res.json(data);
            }

        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
})

router.get('/tasks', (req, res) => {
    db.get('tasks')
        .then(data => {
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

module.exports = router;