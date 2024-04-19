#!/bin/bash

cd "my-app/"
pwd

# Check if .env already exists
if [[ ! -f ".env" ]]; then
    echo "Setting up the .env file..."

    # Prompting user for input
    read -p "Enter your database name: " DB_NAME
    read -p "Enter your database user: " DB_USER
    read -p "Enter your database password: " DB_PASSWORD
    read -p "Enter your database host: " DB_HOST
    read -p "Enter your database port: " DB_PORT
    read -p "Enter your app port: " PORT

    # Creating and writing data to .env
    echo "DB_NAME=$DB_NAME" > .env
    echo "DB_USER=$DB_USER" >> .env
    echo "DB_PASSWORD='$DB_PASSWORD'" >> .env
    echo "DB_HOST=$DB_HOST" >> .env
    echo "DB_PORT=$DB_PORT" >> .env
    echo "PORT=$PORT" >> .env

    echo ".env file created successfully."
else
    echo ".env file already exists."
fi

# Install npm packages
echo "Installing npm packages..."
npm install

# Start the application
echo "Starting the application..."
node app.js
