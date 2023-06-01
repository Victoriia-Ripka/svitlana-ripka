const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(['/api/articles']);
});

router.get('/:id', (req, res) => {
  res.json(['/api/articles/:id']);
});

module.exports = router;