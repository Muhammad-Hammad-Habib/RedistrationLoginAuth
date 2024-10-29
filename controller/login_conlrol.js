import user_model from "../models/user_model.js";
import bcrypt from "bcrypt";

class login_user {
  static home_page = async (req, resp) => {
    resp.render("index");
  };
  // This will redirect to registration page
  static registration = async (req, resp) => {
    resp.render("registration");
  };
  // create user -- registration form
  static create_user = async (req, resp) => {
    try {
      const hashed_pass = await bcrypt.hash(req.body.password, 5);
      const userData = new user_model({
        name: req.body.name,
        email: req.body.email,
        password: hashed_pass,
      });
      await userData.save();
      resp.redirect("/login");
    } catch (error) {
      console.log(`create_user  ${error}`);
    }
  };
  // This will redirect to Login page
  static login = async (req, resp) => {
    resp.render("login");
  };

  // create user -- registration form
  static check_user = async (req, resp) => {
    try {
      const { email, password } = req.body;
      const get_data = await user_model.findOne({ email: email });
      const check_hashed = await bcrypt.compare(password, get_data.password);

      if (get_data != null) {
        if (get_data.email === email && check_hashed) {
          console.log("you have succesfully Logged in ");
          resp.send(
            `you have succesfully Logged in with this user ${get_data.email}`
          );
        } else {
          if (password.trim() == "") {
            console.log("Password required");
            resp.send("Password required");
          } else {
            console.log("Inconrrect password ");
            resp.send("Inconrrect password");
          }
        }
      } else {
        console.log("inconrrect Email");
        resp.send(`inconrrect Email ${email}`);
      }
      console.log(get_data);
      console.log(email, password);
    } catch (error) {
      console.log(`create_user ${error}`);
    }
  };
}

export default login_user;
