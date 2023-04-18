const express = require('express');
const router = express.Router();
const applicationsController = require('../controllers/myTasks');

router.get('/myTasks', applicationsController.displayTasks);
router.get('/applicants/:serviceId', applicationsController.displayApplicants);
router.post('/confirm/:applicationId',applicationsController.ConfirmApplicationStatus)
router.post('/cancel/:applicationId',applicationsController.CancelApplicationStatus)


module.exports = router;
