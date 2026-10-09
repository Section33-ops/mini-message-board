import express from 'express';
import { getMessages } from '../controllers/messageController.js';

const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);
// router.get('/new');

export default messagesRouter;
