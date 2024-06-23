# Backend API - Stock App

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/<USERNAME>/<REPOSITORY>.git
    cd <REPOSITORY>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file by copying `.env.example` and filling in the required values:
    ```bash
    cp .env.example .env
    ```

4. Fill in the required values in the `.env` file:
    ```plaintext
    MYSQL_HOST=your_mysql_host
    MYSQL_USER=your_mysql_user
    MYSQL_PASSWORD=your_mysql_password
    MYSQL_DATABASE=your_mysql_database
    ```

5. Start the application:
    ```bash
    npm start
    ```

## Project Structure

- `config/` - Database configuration
- `controllers/` - Controllers for handling requests
- `routes/` - Route definitions
- `index.js` - Entry point of the application

