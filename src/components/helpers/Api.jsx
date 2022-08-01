const ShoesContext = {
  shoesEndpoint: () => `${Api.baseUrl}/shoes`, //URL inicial(base)
  shoesCL: () => ShoesContext.shoesEndpoint(), //URL para criar e lista
  shoesById: (id) => `${ShoesContext.shoesEndpoint()}/${id}`, //URL para buscar por ID
};

export const Api = {
  baseUrl: "http://localhost:3001",
  ...ShoesContext,
};
