import express from 'express';

import makeExpressCallback from '../make-callback';
import costosTramoController from '../../controllers/costosTramo'

const router = express.Router();

router.route('/costos-tramo').get(makeExpressCallback(costosTramoController.findAllCostosTramo));

export default router;
