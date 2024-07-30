import express from 'express';
import * as roomHandler from '../handler/room-handler';

const router = express.Router();

router.get('/', roomHandler.get);
router.get('/:id', roomHandler.getById);

router.post('/', roomHandler.create);

router.patch('/:id', roomHandler.patch);

router.delete('/:id', roomHandler.activate);
