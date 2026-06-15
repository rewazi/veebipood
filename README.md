
#  veebipood-mikroteenused

##  Projektikirjeldus

See projekt on **mikroteenustel põhinev veebipoe backend-süsteem**, mis koosneb mitmest iseseisvast teenusest. Kõik teenused suhtlevad omavahel API Gateway kaudu ning töötavad eraldi Docker konteinerites.

---

##  Arhitektuur

Süsteem koosneb järgmistest teenustest:

- **API Gateway** – kõigi päringute keskne sisenemispunkt  
- **User Service** – kasutajate haldus (registreerimine, autentimine)  
- **Product Service** – toodete haldus  
- **Order Service** – tellimuste haldus  

Kõik teenused töötavad iseseisvalt ja suhtlevad omavahel REST API kaudu.

---

##  Tehnoloogiad

- Node.js / Express  
- Docker & Docker Compose  
- REST API  
- JSON  

---

##  Käivitamine

### 1. Klooni projekt

```bash
git clone https://github.com/Vitali-Kol/veebipood-mikroteenused.git
cd veebipood-mikroteenused
````

### 2. Käivita Dockeriga

```bash
docker-compose up --build
```

---

##  Teenused

Tüüpilised aadressid:

* API Gateway → [http://localhost:8000](http://localhost:8000)
* User Service → [http://localhost:8001](http://localhost:8001)
* Product Service → [http://localhost:8002](http://localhost:8002)
* Order Service → [http://localhost:8003](http://localhost:8003)

---

##  API näited

###  Kasutaja registreerimine

```http
POST /register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

###  Sisselogimine

```http
POST /login
Content-Type: application/json
```

###  Toodete loetelu

```http
GET /products
```

###  Tellimuse loomine

```http
POST /orders
Content-Type: application/json
```

---

##  Ideoloogia

Mikroteenuste arhitektuuri eesmärk:

* iga teenus vastutab ainult ühe osa eest
* süsteem on skaleeritav
* teenuseid saab eraldi arendada ja muuta
* ühe teenuse viga ei lõhu kogu süsteemi

---

##  Projekti struktuur

```
veebipood/
│
├── api-gateway/
├── user-service/
├── product-service/
├── order-service/
├── docker-compose.yml
└── README.md
```

---

##  Märkused

* Kõik teenused töötavad eraldi Docker konteinerites
* Suhtlus toimub REST API kaudu
* Gateway suunab kõik päringud õigesse teenusesse
* Süsteem on mõeldud arendamiseks ja skaleerimiseks


