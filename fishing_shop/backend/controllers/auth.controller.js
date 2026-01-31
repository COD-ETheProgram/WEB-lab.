const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/db");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT users.id, users.password, roles.name AS role FROM users JOIN userroles ON users.id = userroles.user_id JOIN roles ON roles.id = userroles.role_id WHERE email = ?",
    [email],
    async (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ message: "Невірні дані входу" });
      }

      const user = results[0];
      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return res.status(401).json({ message: "Невірний пароль" });
      }

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token, role: user.role });
    }
  );
};
