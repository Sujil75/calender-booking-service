# 📅 Calendar Booking Backend API

A **Node.js + Express + Sequelize (MySQL)** backend service that allows users to **schedule meetings** while strictly **preventing overlapping time slots**.

This project demonstrates clean backend architecture, proper REST design, relational modeling, and business-rule enforcement.

---

## 🚀 Features

* User management (create & fetch users)
* Meeting scheduling with **strict conflict prevention**
* Update and delete meetings safely
* Filter meetings by user and date range
* Clean modular architecture
* Proper HTTP status codes and error handling

---

## 🧠 Core Business Rule

A meeting **cannot overlap** with an existing meeting for the same user.

**Conflict condition:**

```
existing.startTime < new.endTime
AND
existing.endTime > new.startTime
```

If violated, the API responds with:

```json
{
  "message": "Time slot already booked"
}
```

HTTP Status: **400 Bad Request**

---

## 🛠 Tech Stack

* **Node.js** (18+)
* **Express**
* **Sequelize ORM**
* **MySQL**
* **dotenv**
* **nodemon** (development)

---

## 📂 Project Structure

```
src/
  modules/
    meeting/
      interface/
        MeetingController.js
      model/
        MeetingModel.js
      service/
        MeetingService.js
      routes/
        MeetingRoutes.js
    user/
      interface/
        UserController.js
      model/
        UserModel.js
      service/
        UserService.js
      routes/
        UserRoutes.js
  middlewares/
    authenticator.js
  config/
    DbConnection.js
  utils/
  app.js
  server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd calendar-booking-backend
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_NAME=calendar
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_DIALECT=mysql
```

---

### 4️⃣ Ensure MySQL is running

Make sure your MySQL server is running and the database exists:

```sql
CREATE DATABASE calendar_db;
```

---

### 5️⃣ Start the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 👤 Users

#### Create User

```
POST /users
```

**Body**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response**

* `201 Created`

---

#### Get User by ID

```
GET /users/:id
```

* `200 OK`
* `404 Not Found`

---

### 📅 Meetings

#### Create Meeting

```
POST /meetings
```

**Body**

```json
{
  "userId": 1,
  "title": "Interview",
  "startTime": "2026-02-10T10:00:00.000Z",
  "endTime": "2026-02-10T10:30:00.000Z"
}
```

* `201 Created`
* `400 Bad Request` (conflict or validation error)

---

#### List Meetings

```
GET /meetings
```

**Optional Query Params**

* `userId`
* `startDate`
* `endDate`

Example:

```
/meetings?userId=1&startDate=2026-02-10T00:00:00.000Z&endDate=2026-02-12T00:00:00.000Z
```

---

#### Get Meeting by ID

```
GET /meetings/:id
```

* `200 OK`
* `404 Not Found`

---

#### Update Meeting

```
PUT /meetings/:id
```

* Re-checks overlap (excluding itself)
* `200 OK`
* `400 Bad Request` if conflict

---

#### Delete Meeting

```
DELETE /meetings/:id
```

* `204 No Content`

---

## 🧪 Testing Flow (Recommended)

1. Create a user
2. Create a meeting (10:00–10:30)
3. Attempt overlapping meeting (10:15–10:45) → ❌ rejected
4. Create non-overlapping meeting (10:30–11:00) → ✅ allowed
5. Update meeting into overlap → ❌ rejected

---

## ❗ Validation Rules

* Required fields must be present
* `startTime` must be before `endTime`
* Proper HTTP status codes used:

  * `201` create
  * `200` success
  * `204` delete
  * `400` validation / conflict
  * `404` not found

---

## 🧩 Architecture Notes

* **Routes** → handle URL mapping
* **Controllers** → handle request/response
* **Services** → contain business logic
* **Models** → Sequelize schema definitions
* **Middlewares** → centralized error handling

Conflict prevention logic lives in the **meeting service**, ensuring consistency across create and update operations.

---

## 🌱 Future Enhancements

* JWT authentication
* Pagination for meetings
* Soft deletes
* Unit & integration tests
* Dockerized deployment
* Rate limiting

---

## 📌 Summary

This project showcases:

* Clean backend architecture
* Proper relational modeling
* Correct business-rule enforcement
* Production-grade Sequelize usage
* Readable and maintainable code

Perfect for **backend assessments**, **technical interviews**, and **portfolio demonstration**.

---

If you want, I can now:

* Tighten this README for **ATS / recruiter scanning**
* Add **API diagrams**
* Add **Postman collection**
* Convert to **production checklist**

Just say the word.
