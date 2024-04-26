import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IPagination from './pagination.inerface';
import axios from 'axios';
import hasPagination from '../../helpers/paginationHas';

const initialState: IPagination = {
	last: false,
	next: false,
	page: 1,
	countPages: 1,
	prev: false,
	following: [],
	first: false,
};

export const handlePagination = createAsyncThunk(
	'paginationTableFollowers',
	async ({
		nickname,
		navigate,
		page,
	}: {
		nickname: string;
		navigate: 'next' | 'prev' | 'last' | 'first';
		page: number;
	}) => {
		switch (navigate) {
			case 'first':
				page = 1;
				break;
			case 'next':
				page++;
				break;
			case 'prev':
				page--;
				break;
			case 'last':
				page = initialState.countPages;
				break;
		}
		const responce = await axios.get(
			`https://api.github.com/users/${nickname}/following?per_page=10&page=${page}`,
		);

		const linkHeader = responce.headers.link;
		const paginationButton = hasPagination(linkHeader);

		return {
			page: initialState.page,
			following: responce.data,
			...paginationButton,
		};
	},
);

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(handlePagination.fulfilled, (state, action) => {
			state.next = action.payload.next;
			state.prev = action.payload.prev;
			state.last = action.payload.last;
			state.first = action.payload.first;
			state.page = action.payload.page;
			state.countPages = action.payload.countPages;
			state.following = action.payload.following;
		});
	},
});

export default paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
