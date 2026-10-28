# Inventory Restock System

Node.js + Express REST API (INSERT, RETRIEVE, DELETE only) with a fetch()-based frontend. Data is stored in `data.json`.

## Run

```bash
npm install
npm start
```

Open http://localhost:3000

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/products | Retrieve all products |
| GET | /api/products/:id | Retrieve one product |
| POST | /api/products | Add a product (rejects stock < 0 with 400) |
| DELETE | /api/products/:id | Delete a product |

## Stock status

- `0` -> OUT OF STOCK
- `1-5` -> LOW STOCK
- `> 5` -> AVAILABLE

Repository name format: `MIDTERM-EXAM-QXX-LASTNAME-FIRSTNAME`
