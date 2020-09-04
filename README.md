#Node.js-Connect-to-mongodb-atlas-cloud-database-using-the-driver-we-will-not-use

Node.js-Connect-to-mongodb-atlas-cloud-database-using-the-driver-we-will-not-use

we will not use this as it creates a new connection every time we use it and we also dont close it hence it makes it very inefficient to use as there are a lot of connections to database.

The better way to link to database is to just have one single connection and then use it everywhere, where we want to connect to the database.

This would be very efficient and easy to use
