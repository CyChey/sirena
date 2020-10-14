const express = require('express');
const router = express.Router();
const appointmentCtrl = require('../../controllers/appointments');

router.use(require('../../config/auth'));
router.get('/', checkAuth, appointmentCtrl.index);
router.put('/:id', checkAuth, appointmentCtrl.update);
router.post('/', checkAuth, appointmentCtrl.create);
router.delete('/:id', checkAuth, appointmentCtrl.delete);

function checkAuth(req, res, next) {
    console.log('Checking auth');
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;