const crypto = require('crypto'); //this is nodeJs built-in library

function xfersCallbackVerificator(req, res, next) {
  const secret = process.env.SIGNING_SECRET; //obtained when seting new callback URL in dashboard
  const hash = crypto.createHmac('SHA256', secret).update(JSON.stringify(req.body)).digest('hex');

  //if the hash generated above same as the one in Xfers-Signature header, then can proceeed
  if (req.headers['Xfers-Signature'] === hash) { next(); };

  //if hash is different, reject the request
  res.status(401).json({ error: "Unauthorized." });
}

module.exports = xfersCallbackVerificator;