import { postApi } from './../services/PostService';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/reducers/UserSlice"


const rootReducer = combineReducers({
	userReducer,
	[postApi.reducerPath]: postApi.reducer						//reducer с запросом на сервер, с исп. RTK Query
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>							//добавление middleware для работы с RTK Query
			getDefaultMiddleware().concat(postApi.middleware)

	})
}

export type RootState = ReturnType<typeof rootReducer>  //установить тип состояния(state)
export type AppStore = ReturnType<typeof setupStore>	  //установить тип store
export type AppDispatch = AppStore['dispatch']			  //тип dispatch для хранилища(store), не смогу задиспатчить те actions, кот. не определил

