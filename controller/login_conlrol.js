import user_model from "../models/user_model.js";

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
      const userData = new user_model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
       await userData.save();
       resp.redirect("/login")
    } catch (error) {
      console.log(error)
    }
  };

  static login = async (req, resp) => {
    resp.render("login");
  };
}

export default login_user;
