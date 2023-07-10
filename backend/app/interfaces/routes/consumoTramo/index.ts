import express from 'express';

import makeExpressCallback from '../make-callback';
import consumoTramoController from '../../controllers/consumoTramo'

const router = express.Router();

router.route('/consumo-tramo').get(makeExpressCallback(consumoTramoController.findAllConsumoTramo));

export default router;