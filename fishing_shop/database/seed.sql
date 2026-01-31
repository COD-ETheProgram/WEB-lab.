INSERT INTO Roles (name) VALUES
('GUEST'),
('USER'),
('ADMIN');

INSERT INTO Users (username, email, password_hash) VALUES
('admin', 'admin@fishshop.com', 'hash_admin'),
('user1', 'user1@fishshop.com', 'hash_user');

INSERT INTO UserRoles (user_id, role_id) VALUES
(1, 3), -- admin → ADMIN
(2, 2); -- user1 → USER

INSERT INTO Categories (name) VALUES
('Вудки'),
('Приманки'),
('Аксесуари');

INSERT INTO Products (name, price, category_id) VALUES
('Спінінг Shimano', 2500.00, 1),
('Блешня Mepps', 150.00, 2),
('Рибальський ящик', 1200.00, 3);
