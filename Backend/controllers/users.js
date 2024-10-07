const User = require("../models/users");

module.exports.signup = async (req, res) => {
  try {
    let { username, name, email, contact, password } = req.body;

    

    if (!username || !name || !email || !contact || !password)
      return res
        .status(400)
        .json({ message: "All the fields are required for registration!" });

    const existingEmail = await User.findOne({ email });

    if (existingEmail)
      return res
        .status(400)
        .json({ message: "The given email is already registered!" });

    const newUser = new User({
      name,
      email,
      username,
      contact,
      
    });

    const registeredUser = await User.register(newUser, password);

    // Log the user in immediately after registration
    req.login(registeredUser, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error saving the user", err });
      }

      return res
        .status(200)
        .json({ message: "User Registered and Logged in Successfully!" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    req.login(user, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error logging in the user", err });
      }
      return res.status(200).json({ message: "User Logged in successfully" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error while logging out", err });
      else return res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
