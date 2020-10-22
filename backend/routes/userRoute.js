const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

// route for Login
router.post("/login", (req, res) => {
  let email = req.body.email;
  email = email.toLowerCase();
  email = email.trim();

  let password = req.body.password;
  // Data hardcoded here -- can also be used from seperate file data stored in json format
  if (email === "hruday@gmail.com") {
    if (password === "hruday123") {
      // Sign token passing payload, secretorKey, session validity
      let token = jwt.sign(
        {
          email: email,
        },
        SECRET,
        { expiresIn: "2 days" }
      );
      let result = {
        email: email,
        token: "Bearer" + token,
        expiresIn: 5,
      };
      return res.status(200).json({
        ...result,
        message: "Login Successfully",
      });
    } else {
      return res.status(403).json({ pwdIncorrect: "Incorrect password" });
    }
  } else {
    return res.status(404).json({ emailNotExist: "Email doesnot exist" });
  }
});

module.exports = router;
