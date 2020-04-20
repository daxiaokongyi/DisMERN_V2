const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

/* -------------------------------------------------------------------------- */
/*                                get JWTtoken                                */
const jwt = require('jsonwebtoken');
const config = require('config');
/* -------------------------------------------------------------------------- */

// bring submit model
const Submit = require('../../models/Submit');

// @route POST api/survey
// @desc Submit Form
// @access public
router.post(
  '/',
  [
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid Email').isEmail(),
      check('role', 'Please include your role from the select option')
        .not()
        .isEmpty(),
      check('features', 'Please include your most favorite features')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    /* -------------------------------------------------------------------------- */
    /*                              if Errors exists                              */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    /* -------------------------------------------------------------------------- */

    try {
      /* -------------------------------------------------------------------------- */
      /*                          check if an email exists                          */
      const {
        name,
        email,
        age,
        role,
        recommend,
        features,
        comments,
      } = req.body;

      let userSubmit = await Submit.findOne({ email: email });
      if (userSubmit) {
        // remeber to add return in front of res to exit
        return res.status(400).json({
          errors: [
            { msg: 'This Email already submitted. Please use another email.' },
          ],
        });
      }
      /* -------------------------------------------------------------------------- */

      /* -------------------------------------------------------------------------- */
      /*                               set userSubmit                               */

      userSubmit = new Submit({
        name,
        email,
        age,
        role,
        recommend,
        features,
        comments,
      });

      await userSubmit.save();

      /* -------------------------------------------------------------------------- */
      /*                                  Creat JWT                                 */

      const payload = {
        userSubmit: { id: userSubmit.id },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      /* -------------------------------------------------------------------------- */

      // console.log(userSubmit);
      // res.send('Survey Form was submitted successfully');
      // res.send(userSubmit);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
