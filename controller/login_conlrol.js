class login_user {
  static home_page = async (req, resp) => {
    resp.render("index");
  };
  static registration = async (req, resp) => {
    resp.render("registration");
  };
  static login = async (req, resp) => {
    resp.render("login");
  };
}

export default login_user;
