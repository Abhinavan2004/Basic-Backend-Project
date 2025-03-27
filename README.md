# Basic-Backend-Project 

This project is a Node.js-based backend system using **Express** and **MongoDB**. It manages data related to **persons** and **mobile devices**, providing CRUD (Create, Read, Update, Delete) operations through RESTful APIs.

## 📁 Project Structure

```
├── Models
│   ├── Mobiles.js
│   └── person.js
│
├── Routes
│   ├── HandlingRoutes.js
│   └── MobileHandling.js
│
├── .env
├── .gitignore
├── db.js
├── package.json
├── package-lock.json
├── prac_new.js
├── prac.js
└── README.md
```

🛠️ Tech Stack Used

Node.js: For server-side scripting and API creation.

Express: For building RESTful APIs and routing.

MongoDB: As a NoSQL database to store and manage person and mobile data.

Mongoose: For MongoDB object modeling and schema validation.

dotenv: For environment variable management.

```

## 📌 Features

- MongoDB integration using **Mongoose**.
- RESTful APIs for **Person** and **Mobile** collections.
- CRUD operations:
    - **Create**: Add new records.
    - **Read**: Fetch stored records.
    - **Update**: Modify existing records.
    - **Delete**: Remove records.
- Environment configuration using **dotenv**.

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** (v18.x or above)
- **MongoDB** (Local or Atlas)

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory with your MongoDB connection string:

```
URL_MONGO_ONLINE=<your_mongodb_connection_string>
```

### 4. Run the Application
```bash
node prac_new.js
```

The server will start on **port 3270**.

## 📊 API Endpoints

### Base URL: `http://localhost:3270`

### 1. Home Route
```
GET /
Response: "Hello this is home page"
```

### 2. E-commerce Welcome Route
```
GET /ecommerce
Response: "Welcome to ecommerce website"
```

### 3. Mobile Brand Inquiry
```
GET /electro
Response: "which mobile brand do you prefer ????"
```

### 4. Person Routes (CRUD)

- **Create Person**
```
POST /person
Request Body: {
    "name": "John",
    "age": 25,
    "email": "john@example.com",
    "address": "nagpur",
    "salary": 50000
}
```

- **Get All Persons**
```
GET /person
```

- **Update Person by ID**
```
PUT /person/:id
Request Body: {
    "age": 26
}
```

- **Delete Person by ID**
```
DELETE /person/:id
```

### 5. Mobile Routes (CRUD)

- **Create Mobile**
```
POST /Mobile_Section
Request Body: {
    "name": "Oneplus",
    "processor": "Snapdragon 8 Gen 2",
    "price": 45000
}
```

- **Get All Mobiles**
```
GET /Mobile_Section
```

- **Update Mobile by ID**
```
PUT /Mobile_Section/:id
```

- **Delete Mobile by ID**
```
DELETE /Mobile_Section/:id
```

## 📌 Code Overview

### 1. Database Connection (`db.js`)
- Connects to MongoDB using **Mongoose**.
- Handles connection events (connected, error, disconnected).

### 2. Models
- **Person Schema** (`Models/person.js`)
  - Attributes: `name`, `age`, `email`, `address`, `salary`
- **Mobile Schema** (`Models/Mobiles.js`)
  - Attributes: `name`, `processor`, `price`

### 3. Routes
- **HandlingRoutes.js**: CRUD operations for **Person** collection.
- **MobileHandling.js**: CRUD operations for **Mobile** collection.

## 📚 Future Improvements

- Add authentication using **JWT**.
- Enhanced UI: Create a user-friendly interface to interact with the API.
- Implement pagination for large datasets.
- Improve error handling with custom middlewares.

## 🤝 Contributing
Feel free to open issues or create pull requests for improvements and bug fixes.

## 📄 License
This project is licensed under the **MIT License**.

