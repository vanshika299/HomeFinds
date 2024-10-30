const userService=require("../Services/signup");





module.exports.signup = async (req, res) => {
  try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      res.status(201).json({ user: user, message: "New User created Successfully" });
  } catch (err) {
      console.error("Error registering user:", err);
      res.status(400).json({ error: 'Failed to create user', details: err.message });
  }
}


