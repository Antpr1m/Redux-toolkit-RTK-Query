import { fetchUsers } from './ActionCreator';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
	count: number;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		/* usersFetching(state) {																		// 1 вариант
			state.isLoading = true
		},
		usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
			state.users = action.payload
			state.isLoading = false
			state.error = ''
		},
		usersFetchingError(state, action: PayloadAction<string>) {
			state.error = action.payload
			state.isLoading = false
		} */
	},
	extraReducers: {																							// 2 вариант при помощи createAsyncThunk()
		[fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload
			state.isLoading = false
			state.error = ''
		},
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.isLoading = false
		}
	}
})

export default userSlice.reducer;