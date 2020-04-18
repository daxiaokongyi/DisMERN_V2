const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Submit = require('../../models/Submit');

// @route GET api/feedback
// @desc Test Route
// @access public

/* -------------------------------------------------------------------------- */
/*                     get payload from middleware of auth                    */
router.get('/', auth, async (req, res) => {
  try {
    const userSubmit = await Submit.findById(req.userSubmit.id);
    res.json(userSubmit);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});
/* -------------------------------------------------------------------------- */

module.exports = router;
