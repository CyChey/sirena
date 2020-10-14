const Appointment = require('../models/appointment');


module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
};


//index 
async function index(req, res) {
    console.log('Getting appointments');
    try {
        const appointments = await Appointment.find({ user: req.user._id }).populate('user');
        res.status(200).json(appointments);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

// create 
async function create(req, res) {
    console.log('CONTROLLER')
    console.log(req.user)
    req.body.user = req.user._id;
    try {
        const appointment = await Appointment.create(req.body);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//update
async function update(req, res) {
    try {
        const updateAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

// delete 
async function deleteOne(req, res) {
    try {
        const deletedAppointment = await Appointment.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedAppointment);
    }
    catch (err) {
        res.status(500).json(err);
    }
}