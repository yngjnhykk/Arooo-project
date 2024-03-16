import styled from 'styled-components';
import ContentItem from './ContentItem';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { getContents } from '../../api/content';
import { useDispatch, useSelector } from 'react-redux';

function ContentList() {
  const [skip, setSkip] = useState(0);
  const [contentData, setContentData] = useState<any[]>([]);

  // const dispatch = useDispatch();

  // const { contents } = useSelector((state: any) => state.contents);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { status, data, refetch } = useQuery(['contents', skip], () => getContents(skip * 10), {
    refetchOnMount: false,
    onSuccess: (data) => {
      if (data.length === 0) {
        return;
      } else {
        setContentData((contentData) => [...contentData, ...data]);
      }
    },
  });

  useEffect(() => {
    if (inView && data.length !== 0) {
      setSkip(skip + 1);
      refetch();
    }
  }, [inView]);

  if (status === 'loading' || !data) {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  return (
    <Wrap>
      {data && contentData.map((c: any, i: number) => <ContentItem key={i} {...c} />)}
      <div ref={ref}>loading</div>
    </Wrap>
  );
}

export default ContentList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
