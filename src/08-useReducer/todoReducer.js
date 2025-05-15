export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Actio.type = ABC no está implementada');
    default:
      return initialState;
  }
};
