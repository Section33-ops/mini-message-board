import express from 'express';
import {
  getMessages,
  createNewMessage,
  newMessageForm,
} from '../controllers/messageController.js';

const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);
messagesRouter.get('/new', newMessageForm);
messagesRouter.post('/new', createNewMessage);

export default messagesRouter;
