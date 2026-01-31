const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// Публічний
router.get("/", (req, res) => {
  res.json({ message: "Публічний каталог товарів" });
});

// Тільки USER
router.get("/profile", auth, role(["USER", "ADMIN"]), (req, res) => {
  res.json({ message: "Профіль користувача" });
});

// Тільки ADMIN
router.post("/admin", auth, role(["ADMIN"]), (req, res) => {
  res.json({ message: "Адмін-операція дозволена" });
});

module.exports = router;
