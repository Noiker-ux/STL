export default function hasPagination(link: string) {
	const pagination = {
		first: false,
		last: false,
		next: false,
		prev: false,
		countPages: 1,
	};
	const pagesRemainingNext = link.includes(`rel=\"next\"`);
	const pagesRemainingLast = link.includes(`rel=\"last\"`);
	const pagesRemainingPrev = link.includes(`rel=\"prev\"`);
	const pagesRemainingFirst = link.includes(`rel=\"first\"`);

	function countPages() {
		const arrayFromLinks = link.split(' ');
		const itemLast =
			arrayFromLinks.findIndex((itemLink) => itemLink === `rel="last"`) - 1;
		const a = new URL(arrayFromLinks[itemLast].slice(1, -2));
		return Number([...a.searchParams].find((param) => param[0] === 'page')[1]);
	}
	pagination.countPages = countPages();
	pagination.next = pagesRemainingNext;
	pagination.prev = pagesRemainingPrev;
	pagination.first = pagesRemainingFirst;
	pagination.last = pagesRemainingLast;
	return pagination;
}
