import { configureStore } from "@reduxjs/toolkit";
import AuthRedux from './AuthRedux'
import Resume from './Resume'

 const store = configureStore({
    reducer: {
        auth:AuthRedux,
        resume:Resume
    },
});

export default store