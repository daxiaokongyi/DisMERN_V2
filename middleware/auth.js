const jwt = require('jsonwebtoken');
config = require('config');

module.exports = function (req, res, next) {
  /* -------------------------------------------------------------------------- */
  /*                                  get token from header                                */
  const token = req.header('x-auth-token');
  // if no token found
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  //   verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // assign req's object, userSubmit with payload
    req.userSubmit = decoded.userSubmit;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
  /* -------------------------------------------------------------------------- */
};
