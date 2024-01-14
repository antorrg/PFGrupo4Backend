const validJson = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      res.status(400).json({ error: 'Invalid JSON format' });
    } else {
      next();
    }
  };

 module.exports = validJson;