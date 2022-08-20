import { userSlice } from './UserSlice';
import { IUser } from './../../models/IUser';
import axios from 'axios';
import { AppDispatch } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';

//reduxThunk
/* export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(userSlice.actions.usersFetching())
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
		dispatch(userSlice.actions.usersFetchingSuccess(response.data))
	} catch (e) {
		dispatch(userSlice.actions.usersFetchingError('Произошла ошибка при загрузке данных'))
	}
} */

// При помощи createAsyncThunk()
export const fetchUsers = createAsyncThunk(																					//диспатчить actions не надо, в slice
	'user/fetchAll',																													//есть extraReducers: fulfilled, pending,rejected
	async (_, thunkApi) => {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue('Возникла ошибка при загрузке пользователей')
		}

	}
)