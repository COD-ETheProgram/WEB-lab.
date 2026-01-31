SELECT u.username, r.name AS role
FROM Users u
JOIN UserRoles ur ON u.user_id = ur.user_id
JOIN Roles r ON ur.role_id = r.role_id;

SELECT p.name, p.price, c.name AS category
FROM Products p
LEFT JOIN Categories c ON p.category_id = c.category_id;

SELECT o.order_id, SUM(oi.quantity * p.price) AS total
FROM Orders o
JOIN OrderItems oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
GROUP BY o.order_id;
