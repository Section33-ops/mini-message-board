const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

export const getMessages = (req, res) => {
  res.render('index', { messages });
};

export const newMessageForm = (req, res) => {
  res.render('form');
};

export const createNewMessage = (req, res) => {
  const authorName = req.body.authorName;
  const msgTxt = req.body.msgTxt;
  messages.push({ text: msgTxt, user: authorName, added: new Date() });
  res.redirect('/');
};
