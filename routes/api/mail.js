const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const nodemailer = require("nodemailer");
//const smtpTransport = require("nodemailer-smtp-transport");

// Load Validation
const validateContactInput = require("../../validation/contact");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.post("/send", (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "marlon@ltbaconstrucciones.com", // generated ethereal user
        pass: "440LTBAg" // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: req.body.email, // sender address
      to: "info@ltbaconstrucciones.com", // list of receivers
      subject: "Consulta generada WEB LTBA", // Subject line
      text: req.body.text, // plain text body
      html: req.body.text // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(404).json({ error: error });
      }
      res.json({ ok: "ok" });
      //console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
});

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private

module.exports = router;
