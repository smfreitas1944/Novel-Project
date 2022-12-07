const express = require('express');
const router = express.Router();
const catController = require('../../controllers/catController');

router.route('/')
    .get(catController.getAllCats)
    .post(catController.createNewCat)
    .put(catController.updateCat)
    .delete(catController.deleteCat);

router.route('/:id')
    .get(catController.getCat);

module.exports = router;