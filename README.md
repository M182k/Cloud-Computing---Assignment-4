# Cloud Computing-Assignment4 -Azure VM Node.js & API Testing using POSTMAN

Video Recording (https://photos.app.goo.gl/oycVmxRZu1uS3Ezm6)
## Introduction
This project sets up a Virtual Machine (VM) on Azure and implements a Node.js REST API using Express.js. The API allows users to perform CRUD operations on a product inventory stored in an Azure SQL Database.

## Prerequisites
- Azure account with access to create and manage resources
- Basic understanding of Node.js and Express.js
- Postman or any API testing tool for testing the endpoints
- `npm install`, `npm install express` to install Node.js modules. Ensure these are set up even in the VM.

## Installation
1. Create a Virtual Machine on Azure.
2. Install Node.js on the VM and other dependencies such as `npm install express`, Azure Database connection strings, etc.

## Database Setup with Access within VM:
1. Create a Database in Azure SQL Database.
2. Modify the security settings to restrict traffic only from the VM (refer to Output File).
3. Test CRUD operations locally.

## API Testing Using POSTMAN
1. After setting up the VM and Azure SQL Database, test the VM API from the local machine using the VM's Public IP address.
2. Use inbound port 80 for handling API requests from the local machine.
3. Use POSTMAN app to perform API testing.
4. Endpoint settings:
   - VM IP Address: `123.456.356/products` (E.g., use PORT 80, as Azure has port 80 as default inbound & outbound).

## API Endpoint Details & Description:
### 1. Create a new product:
- Method: POST
- Endpoint: `/products`
- Description: Adds a new product to the inventory. The request body should include the name, price, and quantity of the product.

### 2. Retrieve all products:
- Method: GET
- Endpoint: `/products`
- Description: Retrieves a list of all products in the inventory.

### 3. Retrieve a single product:
- Method: GET
- Endpoint: `/products/:id`
- Description: Retrieves detailed information about a specific product using its unique identifier (product ID).

### 4. Update a product:
- Method: PUT
- Endpoint: `/products/:id`
- Description: Updates the details of an existing product, such as changing its name, price, or quantity. The request body should include the attributes of the product that are to be updated.

### 5. Delete a product:
- Method: DELETE
- Endpoint: `/products/:id`
- Description: Removes a product from the inventory using its unique identifier.
