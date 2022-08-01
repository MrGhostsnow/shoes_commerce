import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json(); //metodo para transformar a resposta em json

export const ShoesService = {
  getList: () => fetch(Api.shoesCL(), { method: "GET" }).then(parseResponse), //utilização do fetch com o objeto Api(URL)/ metodo GET(padrão)/ 'then' = 'então' algo como após isso faça aquilo/ 'parseResponse' como metodo(facilitador) para json

  getById: (id) =>
    fetch(Api.shoesById(id), { method: "GET" }).then(parseResponse),

  create: (shoes) =>
    fetch(Api.shoesCL(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(),
    }).then(parseResponse),

  updateById: (id) =>
    fetch(Api.FindById(), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(),
    }).then(parseResponse),

  deleteById: (id) =>
    fetch(Api.FindByById(), { method: "DELETE" }.then(parseResponse)),
};
