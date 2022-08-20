import { IPost } from './../models/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/"
	}),
	tagTypes: ['Post'], 			//работа с тегами
	endpoints: (build) => ({ 																	//Запрос на получение постов GET
		fetchAllPosts: build.query<IPost[], number>({
			query: (limit: number = 5) => ({
				url: '/posts',
				params: {
					_limit: limit
				}
			}),
			providesTags: result => ['Post']
		}),
		createPost: build.mutation<IPost, IPost>({										//Создание нового поста с запросом POST
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'POST',
				body: post
			}),
			invalidatesTags: ['Post']
		}),
		updatePost: build.mutation<IPost, IPost>({										//обновление поста PUT
			query: (post) => ({
				url: '/posts',
				method: 'PUT',
				body: post
			}),
			invalidatesTags: ['Post']
		}),
		deletePost: build.mutation<IPost, IPost>({										//Удаление поста DELETE
			query: (post) => ({
				url: `/posts/${post.id}`,
				method: 'DELETE',
				body: post
			}),
			invalidatesTags: ['Post']
		})
	})
})
