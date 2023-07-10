import express from 'express';
import costosTramoRoutes from './costosTramo';
import consumoTramoRoutes from './consumoTramo';
import perdidasTramoRoutes from './perdidasTramo';

const router = express.Router();

router.use(costosTramoRoutes);
router.use(consumoTramoRoutes);
router.use(perdidasTramoRoutes);

export default router;
