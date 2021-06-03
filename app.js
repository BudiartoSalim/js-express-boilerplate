if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse Content-Type application/vnd.api+json
app.use(express.json({ type: 'application/vnd.api+json' }));
app.get('/', (req, res, next) => { res.status(200).json({ message: "test successful!" }) });


app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
})