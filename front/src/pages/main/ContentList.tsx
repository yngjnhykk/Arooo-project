import styled from 'styled-components';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getContents, like } from '../../api/content';
import ContentItem from './ContentItem';
import { useState } from 'react';

type Props = {};

function ContentList({}: Props) {
  const [liked, setLiked] = useState(false);
  const { status, data } = useQuery('contents', getContents);

  const onClickLike = () => {
    setLiked(true);
  };

  if (status === 'loading') {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  console.log(data);
  return (
    <Wrap>
      {data.map((c: Content, i: number) => (
        <ContentItem key={i} {...c} onClickLike={onClickLike} liked={liked} />
      ))}
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
