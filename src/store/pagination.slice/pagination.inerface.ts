export default interface IPagination {
	last: boolean;
	next: boolean;
	page: number;
	following: any;
	countPages: number;

	prev: boolean;
	first: boolean;
}
