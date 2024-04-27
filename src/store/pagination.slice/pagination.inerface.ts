export default interface IPagination {
	last: boolean;
	next: boolean;
	page: number;
	following: any;
	countPages: number;
	nickname: string;
	prev: boolean;
	first: boolean;
}
