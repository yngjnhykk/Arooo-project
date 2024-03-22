import { useInfiniteQuery } from 'react-query';
import { getContents } from '../api/content';

export const infiniteContents = (skip: number, limit: number) => {
  console.log('skip: ', skip);
  const result = useInfiniteQuery(['infiniteContents'], ({ pageParam = skip }) => getContents(pageParam * 10, limit), {
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = lastPage.length === limit;
      return isLastPage ? allPages.length : undefined;
    },
  });
  return result;
};
