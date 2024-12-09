# 🚀 Getting started with Strapi

### Node version: 20.11.0

1. Setup
- Create .env file with the following content
    ```shell
    # Server
    HOST=0.0.0.0
    PORT=1337
    
    # Secrets
    APP_KEYS= # some random strings
    API_TOKEN_SALT= # some random string
    ADMIN_JWT_SECRET= # some random string
    TRANSFER_TOKEN_SALT= # some random string
    
    # Database
    DATABASE_CLIENT=sqlite
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    DATABASE_SSL=false
    DATABASE_FILENAME=.tmp/data.db
    JWT_SECRET= # some random string
    ```
- Install dependencies
  ```shell
  yarn install
  ```

2. Run development server
    ```shell
    yarn develop
    ```
