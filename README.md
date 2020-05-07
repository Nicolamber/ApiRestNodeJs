# Programacion Avanzada 2020

Cátedra de programación avanzada de la UTN-FRM

El actual ejercicio es un modelo simple de una API-REST desarrollada con NodeJS e implementando diferentes framewokrs, tales como:
- Express
- Express-Generator
- pug
- morgan
- cookie-parser

Es la primer version de la misma por ende actualmente es muy simple y casi sin nada de logica.

Set up environment:

1. npm install para obtener las dependencias
2. En una terminal levantar un docker con redis: docker run --name redis -p 6379:6379 redis
3. levantar el proyecto: 
   - Linux o Mac: DEBUG=apiRest:* npm start
   - Windows: set DEBUG=apiRest:* & npm start
4. Acceder a localhost:3000/

Request Examples:

-POST

curl --header "Content-Type: application/json"   --request POST --data '{"clientId":"1","contractId":"1"}' http://localhost:3000/clients/1/contracts/1

- GET

curl --header "Content-Type: application/json"   --request GET  http://localhost:3000/clients/1/contracts/1
   
- PUT

curl --header "Content-Type: application/json"   --request PUT --data '{"clientId":"1","contractId":"2"}' http://localhost:3000/clients/1/contracts/1

- DELETE

curl --header "Content-Type: application/json"   --request PUT --data '{"clientId":"1","contractId":"1"}' http://localhost:3000/clients/1/contracts/1
