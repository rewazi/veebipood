# Veebipood

Veebipood on Node.js ja Expressi põhine REST API e-poe rakendus, mis võimaldab hallata kasutajaid, tooteid ja tellimusi.

## Tehnoloogiad

* Node.js
* Express.js
* JavaScript
* REST API
* GitHub Actions (CI/CD)

## Käivitamine

### Eeldused

- Node.js 18+
- npm

### Paigaldamine

```bash
npm install
```

### Arendusrežiimis käivitamine

```bash
npm run dev
```

### Tavarežiimis käivitamine

```bash
npm start
```

Server käivitub vaikimisi aadressil:

```
http://localhost:3000
```

---

## Testikasutajad

### Tavaline kasutaja

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Administraator

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

---

## Teadaolevad vead

Rakenduses on kaks viga mida pead parandama:

1. `src/routes/products.js` — otsing ei tööta
2. `src/routes/orders.js` — tellimuse staatus on vale

## API endpointid

### Kasutajad

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/users/signup | Uue kasutaja registreerimine |
| POST | /api/users/login | Sisselogimine |
| POST | /api/users/logout | Väljalogimine |
| GET | /api/users/me | Sisselogitud kasutaja andmed |

### Tooted

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| GET | /api/products | Kõik tooted |
| GET | /api/products/:id | Toote detailid |
| GET | /api/products/search | Toodete otsing |
| GET | /api/products/categories | Kõik kategooriad |
| GET | /api/products/category/:cat | Tooted kategooria järgi |

### Tellimused

| Meetod | URL | Kirjeldus |
|--------|-----|-----------|
| POST | /api/orders | Uue tellimuse loomine |
| GET | /api/orders | Kõik tellimused |
| GET | /api/orders/me | Kasutaja tellimused |
| GET | /api/orders/:id | Konkreetne tellimus |
| PATCH | /api/orders/:id/status | Tellimuse staatuse muutmine |

## Arhitektuur

```text
src/
├── routes/
│   ├── users.js
│   ├── products.js
│   └── orders.js
├── models/
├── middleware/
└── app.js
```

## GitHub Actions

Projekt kasutab GitHub Actions töövooge automaatseks kontrolliks.

Peamised tegevused:

- sõltuvuste paigaldamine
- testide käivitamine
- koodi kvaliteedi kontroll
- automaatne valideerimine pull requestide puhul

Workflow failid asuvad:

```text
.github/workflows/
```
## Mis juhtub, kui me läheme üle mikroteenustele?

kõik toimib iseseisvalt ja iseseisvalt

# monolit
```
veebipood/
│
├── public/                    
│   ├── index.html             
│   └── style.css             
│
├── src/
│   ├── routes/                
│   │   ├── users.js           
│   │   ├── products.js        
│   │   └── orders.js          
│   │
│   ├── data.js                
│   ├── server.js             
│   └── test.js                
│
├── .gitignore                 
├── Dockerfile                
├── docker-compose.yml         
├── package.json               
├── package-lock.json         
├── README.md                  
└── ISESEISEV_YLESANNE.md      
```

# Mikroteenuste arhitektuur

```
veebipood-microservices/
│
├── gateway/                      
│   ├── server.js
│   └── package.json
│
├── user-service/                 
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
│
├── product-service/               
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
│
├── order-service/                 
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
│
├── frontend/                      
│   ├── public/
│   └── src/
│
├── docker-compose.yml             
└── README.md
```





