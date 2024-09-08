import { configureStore } from '@reduxjs/toolkit';

import applicationSlice from './application';
import projectSlice from './projects';


const store = configureStore({
  reducer: {
    applicationState: applicationSlice.reducer,
    projectState: projectSlice.reducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   })
});

export default store;



