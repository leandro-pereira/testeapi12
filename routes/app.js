const instaTouch = require('instatouch');
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  (async () => {
    try {
      const options = { count: 100 };
      const comments = await instaTouch.comments(req.params.id, options);
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.send(comments);
    } catch (error) {
      console.log(error);
    }
  })();
});

router.get('/', (req, res) => {
  res.send('Olá bem -vindo');
});

module.exports = router;
