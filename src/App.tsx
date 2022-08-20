import { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';


function App() {
	// const dispatch = useAppDispatch()
	// const { users, isLoading, error } = useAppSelector(state => state.userReducer)

	// useEffect(() => {
	// 	dispatch(fetchUsers())
	// }, [])

	return (
		<div>
			Mau-mau
			<div style={{ display: 'flex' }}>
				<PostContainer />
				<PostContainer2 />
			</div>
		</div>
	);
}

export default App;








