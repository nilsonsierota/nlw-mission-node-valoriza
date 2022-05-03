import express from "express";

const app = express();

/**
 * GET    => Buscar informacao
 * POST   => Inserir informacao
 * PUT    => Alterar informacao
 * DELETE => Deletar informacao
 * PATCH  => Alterar informacao especifica
 */

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo

  return response.send("Ola NLW!");
});

app.post("/test-post", (request, response) => {
  return response.send("Ola NLW metodo POST!");
});

app.listen(3000, () => console.log("Server is running"));
