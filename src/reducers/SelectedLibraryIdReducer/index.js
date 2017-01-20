import initialState from './initialState.json';

export const SelectedLibraryIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return {
        selectedLibraryId: action.id
      };
    default:
      return state;
  }
};
