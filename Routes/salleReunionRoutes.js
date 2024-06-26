
const express = require('express');
const router = express.Router();

const path = require ("path");
const app = express();

const {
    createSalle,
    getAllSalles,
    updateSalle,
    deleteSalle,
  } = require('../Controllers/salleReunionController');
  const { authenticateUser } = require('../middleware/authentication');

  



router.post('/', createSalle);
router.delete('/:id',authenticateUser, deleteSalle);
router.get('/ListSalleReunion', getAllSalles);
router.put('/:id',authenticateUser, updateSalle);

module.exports = router; 