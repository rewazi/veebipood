const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/api/users",
  createProxyMiddleware({
    target: "http://user-service:3001",
    changeOrigin: true,
  })
);

app.use(
  "/api/products",
  createProxyMiddleware({
    target: "http://product-service:3002",
    changeOrigin: true,
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: "http://order-service:3003",
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log("API Gateway töötab pordil 3000");
});