const fs = require("fs");
const http = require("http");
const url = require("url");

const porfolio = fs.readFileSync(`${__dirname}/porfolio/index.html`, "utf-8");

console.log(porfolio);
