const express = require('express');
const { registerCenter, getCenterById, getPendingCenters, updateCenterStatus } = require('../controllers/centerController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authenticate, registerCenter);
router.get('/:id', authenticate, getCenterById);
router.get('/pending', authenticate, isAdmin, getPendingCenters);
router.patch('/:id/status', authenticate, isAdmin, updateCenterStatus);

module.exports = router;
