const express = require('express');
const sql = require('mssql');
const app = express();
const PORT = process.env.PORT || 80;  /* Azure Inbound port set to 80*/

app.use(express.json()); /* parsing*/

/* Creating SQL Server connection */
const config = {
    user : 'venkat@my-server',
    password: 'mukesh@usa121',
    server: 'my-server.database.windows.net',
    database: 'inventory',
    options: {
        encrypt: true, 
        enableArithAbort: true 
    }
};

async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Connected to Azure SQL Database');
    } catch (err) {
        console.error('Error connecting to Azure SQL Database:', err);
    }
}

connectToDatabase();

// 1.Retrieve all products
app.get('/products', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM products`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 2. Retrieve a single product by ID
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM products WHERE id = ${productId}`;
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(result.recordset[0]);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 3. Adding new product
app.post('/products', async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        await sql.query`INSERT INTO products (name, price, quantity) VALUES (${name}, ${price}, ${quantity})`;
            // printing result 
        res.status(201).json({ name, price, quantity });
    } catch (error) {
        console.error('Error inserting product into SQL database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// 4. Updating Product
app.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, price, quantity } = req.body;
    try {
        const result = await sql.query`UPDATE products SET name = ${name}, price = ${price}, quantity = ${quantity} WHERE id = ${productId}`;
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ id: productId, name, price, quantity });
    } catch (error) {
        console.error('Error updating product in SQL database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// 5.Delete a product by ID
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await sql.query`DELETE FROM products WHERE id = ${productId}`;
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting product from SQL database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

VM_ip  = 'http://20.206.203.115/'
app.listen(PORT, () => {
    console.log(`Server is running on ${VM_ip}`);
});

app.get('/', (req, res) => {
    res.send('Server is running');
});
