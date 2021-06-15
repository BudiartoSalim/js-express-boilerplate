if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// middleware to parse Content-Type application/vnd.api+json
app.use(express.json({ type: 'application/vnd.api+json' }));
app.get('/', (req, res, next) => { res.status(200).json({ message: "test successful!" }) });

// notice how the middleware is called and used for /callbacks route
const xfersCallbackVerificator = require('./xfers-callback-verificator');
app.use("/callbacks", xfersCallbackVerificator);

app.post('/callbacks/accept', (req, res, next) => {
  //process the callback data for xfers accept API
  //send status 200 for response if successful so Xfers will not retry the callback multiple times
  res.status(200).json({ message: "success" });
});

app.post('/callbacks/send', (req, res, next) => {
  //process the callback data for xfers send API
  //send status 200 for response if successful so Xfers will not retry the callback multiple times
  res.status(200).json({ message: "success" });
});


app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
})