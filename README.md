## CSM Lab 8

This is a basic express baased project for my Cloud Security and Management class. It is a simple project that uses express to create a server that listens on port 3000 and serves a simple HTML file. The HTML file contains a form that allows the user to enter any value to be sent to the database.

The project allows to view the data in the database and add some data from the database. The project assumes a myssql database is running and configured with a table called enteries with a single column called `data`.

## Installation

1. Clone the repository

```bash
git clone https://github.com/chetanyb/csm-exp-8.git
```

2. Run the setup script

```bash
./start.sh
```

This will create a `.env` file aand ask for the database configuration if not already present. The script will also install the required dependencies and start the server at specified port.
