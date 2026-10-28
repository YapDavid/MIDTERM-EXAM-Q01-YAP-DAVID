# Inventory Restock System

Node.js + Express REST API (INSERT, RETRIEVE, DELETE only) with a fetch()-based frontend. Data is stored in `data.json`.

## Run

```bash
npm install
npm start
```

Open http://localhost:3000


| GET | /api/products | Retrieve all products |
| GET | /api/products/:id | Retrieve one product |
| POST | /api/products | Add a product (rejects stock < 0 with 400) |
| DELETE | /api/products/:id | Delete a product |

## Stock status

- `0` -> OUT OF STOCK
- `1-5` -> LOW STOCK
- `> 5` -> AVAILABLE

Midterm Exam: Integrative Programming
Node.js + Express REST API Practical Exam
General Requirements

For your assigned system:

Use Node.js + Express.

You may use a data.json file as the data source.

Your API must actually read from and write to data.json.

Create a simple frontend that communicates with your API using JavaScript fetch().

Implement INSERT, RETRIEVE, and DELETE only.

Do not implement UPDATE, PUT, or PATCH.

Use the following required API structure:

GET /api/[resource] — retrieve all records

GET /api/[resource]/:id — retrieve one record by ID

POST /api/[resource] — insert a new record

DELETE /api/[resource]/:id — delete a record by ID

Use appropriate HTTP status codes and return JSON responses.

The frontend must allow the user to:

View all records

View/search for a specific record by ID

Add a new record

Delete a record

Submit your project in a new GitHub repository.

MIDTERM-EXAM-QXX-LASTNAME-FIRSTNAME
QXX is the question number (Found on top of the question/item)
Example: MIDTERM-EXAM-Q01-MINAJ-NICKI
If you are done, you may leave the room.
Internet Access
Full internet access is allowed during the examination.
