import express from 'express';
import * as tableHandler from '../handler/table-handler';

const router = express.Router();

router.get('/', tableHandler.get);

router.get('/:id', tableHandler.getById);

router.post('/', tableHandler.create);

router.patch('/:id', tableHandler.patch);

router.delete('/:id', tableHandler.activate);

export default router;
