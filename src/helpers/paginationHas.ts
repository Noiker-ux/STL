import { IPagination } from "../store/pagination.slice";

export default function hasPagination(link: string): IPagination {
  const pagination = { next: false, prev: false };
  const pagesRemainingNext = link.includes(`rel=\"next\"`);
  const pagesRemainingPrev = link.includes(`rel=\"prev\"`);
  pagination.next = pagesRemainingNext;
  pagination.prev = pagesRemainingPrev;
  return pagination;
}
