Azure VM Node.js & API Testing using POSTMAN

1.Introduction
	This project sets up a Virtual Machine (VM) on Azure and implements a Node.js REST API using Express.js. The API allows users to perform CRUD operations on a product inventory 	stored in an Azure SQL Database.

2. Prerequisites
	a. Azure account with access to create and manage resources
	b. Basic understanding of Node.js and Express.js
	c. Postman or any API testing tool for testing the endpoints
	d. npm install, npm install express to load node modules**, please setup this even in VM

3. Installation
	1. Create a Virtual Machine on Azure:
	2. Install Node.js ob VM and other dependecies such as npm install,express, Azure Database connection strings etc

4. Database Setup with Access with in VM :
	1. Create Database in Azure SQL Database
	2. Modify the security settings to restrict Traffic only from VM (refer Output File)
	3. Test Locally all CURD Operations

5. API Testing Using POSTMAN
	1. After Setting upon VM,Azure SQL Database, test VM API from local machine using VM Public IP address
	2. Use Inbound Port as 80 for handling API Requests form local machine
	3. Used POSTMAN APP to perform API Testing
	4. endpoint Settings 
		VM_ip Address : 123.456.356/products (Eg) use PORT 80 (Azure has already 80 as Default Inbound & Outbound)

6. API Endpoint Details & Description :
	6.1. Create a new product:
		Method: POST
		Endpoint: /products
		Description: Adds a new product to the inventory. The request body should include the name, price, and quantity of the product.

	6.2. Retrieve all products:
		Method: GET
		Endpoint: /products
		Description: Retrieves a list of all products in the inventory.

	6.3 Retrieve a single product:
		Method: GET
		Endpoint: /products/:id
		Description: Retrieves detailed information about a specific product using its unique identifier (product ID).

	6.4 Update a product:
		Method: PUT
		Endpoint: /products/:id
		Description: Updates the details of an existing product, such as changing its name, price, or quantity. The request body should include the attributes of the product that 			    are to be updated.

	6.5 Delete a product:
		Method: DELETE
		Endpoint: /products/:id
		Description: Removes a product from the inventory using its unique identifier.
