const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM Products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { name, price } = req.body;
  const sql = 'INSERT INTO Products (name, price) VALUES (?, ?)';

  db.query(sql, [name, price], err => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Product created' });
  });
};

exports.update = (req, res) => {
  const { name, price } = req.body;
  const sql = 'UPDATE Products SET name=?, price=? WHERE product_id=?';

  db.query(sql, [name, price, req.params.id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product updated' });
  });
};

exports.remove = (req, res) => {
  db.query(
    'DELETE FROM Products WHERE product_id=?',
    [req.params.id],
    err => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Product deleted' });
    }
  );
};
