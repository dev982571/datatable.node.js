# DataTable Backend

## Overview
This is a backend project built using Node.js, Express.js and MongoDB.

This project performs CRUD operations:
- Create User
- Get Users
- Update User
- Delete User

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Folder Structure

```text
datatable.node/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── usercontroller.js
│   │   ├── updateuser.js
│   │   ├── getuser.js
│   │   └── deleteuser.js
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │   └── usermodel.js
│   │
│   └── routes/
│       └── userroutes.js
│
├── server.js
├── package.json
└── README.md
```

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | /api/users | Create User |
| GET | /api/users | Get All Users |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

## Run Project

```bash
npm install
npm run dev
```