export default function hasPagination(link: string) {
	const pagesRemainingLast = link.includes(`rel=\"last\"`);
	let lastPage = 1;

	if (pagesRemainingLast) {
		const arrayFromLinks = link.split(' ');
		const itemLast =
			arrayFromLinks.findIndex((itemLink) => itemLink === `rel="last"`) - 1;
		const linkLast = new URL(arrayFromLinks[itemLast].slice(1, -2));
		const pageCount = linkLast.searchParams.get('page');
		lastPage = Number(pageCount) ?? 1;
	}

	const pagesRemainingNext = link.includes(`rel=\"next\"`);
	const pagesRemainingPrev = link.includes(`rel=\"prev\"`);
	const pagesRemainingFirst = link.includes(`rel=\"first\"`);

	return {
		first: pagesRemainingFirst,
		last: pagesRemainingLast,
		next: pagesRemainingNext,
		prev: pagesRemainingPrev,
		countPages: lastPage,
	};
}
