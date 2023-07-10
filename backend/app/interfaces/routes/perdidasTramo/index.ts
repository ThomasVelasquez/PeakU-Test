import express from 'express';

import makeExpressCallback from '../make-callback';
import perdidasTramoController from '../../controllers/perdidasTramo';

const router = express.Router();

router
  .route('/perdidas-tramo')
  .get(makeExpressCallback(perdidasTramoController.findAllPerdidasTramo));

export default router;
