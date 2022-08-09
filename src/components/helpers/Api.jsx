const ShoesContext = {
  shoesEndpoint: () => `${Api.baseUrl}/shoes`, //URL inicial(base)
  shoesCL: () => ShoesContext.shoesEndpoint(), //URL para criar e lista
  shoesById: (id) => `${ShoesContext.shoesEndpoint()}/${id}`, //URL para buscar por ID
};

// const urls ={
//   development: 'http://localhost:3001',
//   production: 'https://apifakeshoes.herokuapp.com'
// }

export const Api = {
  baseUrl: 'http://localhost:3001',
  ...ShoesContext,
};
