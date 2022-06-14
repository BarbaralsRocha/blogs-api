// requisito 2: não encontra o id(que esta implicito) do model
// requisito 3: não consigo lidar com o erro no middleware
// const messages = {
//     INVALID_FIELDS: 'Invalid fields',
//   };
  
//   const status401 = (status, message) => ({ status, message });
  
  const createMessage = (statusCode, field) => {
    switch (statusCode) {
    case 401:
      return ({ statusCode, field });
    default:
      throw new Error('Status Inexistente');
    }
  };
  
  module.exports = createMessage;