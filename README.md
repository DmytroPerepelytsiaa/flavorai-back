## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. Install Dependencies

```bash
npm install
```

### 2.Create a .env file in the root directory and add the following lines:

```bash
DATABASE_URL="postgresql://admin:adminpassword@localhost:5432/flavorai"
JWT_SECRET=my_jwt_secret
JWT_EXPIRES_IN=2d
```

### 3. Start Docker Services

```bash
docker compose up
```

### 4. Start the Application

```bash
npm run start
```

## ✅ You have successfully started the project!