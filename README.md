# Product Management Backend

This is a backend application for managing products and orders in an e-commerce system. It is built using Node.js, Express, TypeScript, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Routes](#api-routes)
  - [Product Management](#product-management)
  - [Order Management](#order-management)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd product_management_backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/product_management
    ```

Replace `mongodb://localhost:27017/product_management` with your actual MongoDB connection string if different.

## Running the Application

To run the application in development mode:

    ```bash
    npm run start:dev
    ```

The server will start on the port specified in the `.env` file (default is 5000).

## API Routes

### Product Management

- **Create a New Product**

  - **Endpoint:** `/api/products`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product created successfully!",
      "data": {
        // Product details...
      }
    }
    ```

- **Retrieve a List of All Products**

  - **Endpoint:** `/api/products`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Products fetched successfully!",
      "data": [
        // List of products...
      ]
    }
    ```

- **Retrieve a Specific Product by ID**

  - **Endpoint:** `/api/products/:productId`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product fetched successfully!",
      "data": {
        // Product details...
      }
    }
    ```

- **Update Product Information**

  - **Endpoint:** `/api/products/:productId`
  - **Method:** `PUT`
  - **Request Body:**
    ```json
    {
      // Product details...
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product updated successfully!",
      "data": {
        // Updated product details...
      }
    }
    ```

- **Delete a Product**

  - **Endpoint:** `/api/products/:productId`
  - **Method:** `DELETE`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Product deleted successfully!"
    }
    ```

- **Search Products**

  - **Endpoint:** `/api/products?searchTerm=search`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Products matching search term 'search' fetched successfully!",
      "data": [
        // List of matching products...
      ]
    }
    ```

### Order Management

- **Create a New Order**

  - **Endpoint:** `/api/orders`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "email": "level2@programming-hero.com",
      "productId": "5fd67e890b60c903cd8544a3",
      "price": 999,
      "quantity": 1
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Order created successfully!",
      "data": {
        // Order details...
      }
    }
    ```

- **Retrieve All Orders**

  - **Endpoint:** `/api/orders`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Orders fetched successfully!",
      "data": [
        // List of orders...
      ]
    }
    ```

- **Retrieve Orders by User Email**

  - **Endpoint:** `/api/orders/search?email=level2@programming-hero.com`
  - **Method:** `GET`
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Orders fetched successfully for user email!",
      "data": [
        // List of orders for the user...
      ]
    }
    ```


