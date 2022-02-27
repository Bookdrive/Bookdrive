
Structure of the repository right now is the following:
```
.
├── index.html
├── script.js
├── backend.js
├── database.js
├── server.js
├── Readme.md
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── Bookdrive.sql
└── style.css

```

~~where app/ folder will be having the frontend files, public/ folder within it will be containing images and media if any required(for example logo of website etc.).~~

`app` directory destroyed. Now frontend also lives in root directory.(some serving issues were occuring).

`Bookdrive.sql` added for the reference of database and can be imported locally easily for testing purposes by

``` shell
mysql -u yourusername -p yourpassword Bookdrive < /path/to/Bookdrive.sql
```
Database right now doesn't have the `Categories` table and many attributes from different tables but only the required ones for functional purposes.