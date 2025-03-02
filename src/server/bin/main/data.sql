-- Insert initial client
INSERT INTO client (id, name) VALUES ('111b', 'Test Client');

-- Insert sample stocks
INSERT INTO stock (id, type, price, date, quantity, client_id) VALUES
    ('7a72123c-dd89-4b77-b7c1-fbc5ac793a11', 'wine', 100.00, '2024-01-01', 50, '111b'),
    ('4137cf6b-cdd5-4fd1-a997-92ca8e643d1c', 'whisky', 150.00, '2024-01-02', -20, '111b');