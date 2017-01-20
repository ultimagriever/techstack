import { combineReducers } from 'redux';
import { LibraryReducer } from './LibraryReducer';
import { SelectedLibraryIdReducer } from './SelectedLibraryIdReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectedLibraryIdReducer
});
