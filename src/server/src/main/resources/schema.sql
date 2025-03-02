CREATE TABLE IF NOT EXISTS client (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS stock (
    id VARCHAR(255) PRIMARY KEY,
    type VARCHAR(10) CHECK (type IN ('wine', 'whisky')),
    price DECIMAL(10,2) NOT NULL,
    date DATE NOT NULL,
    quantity INTEGER NOT NULL,
    client_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client(id)
);