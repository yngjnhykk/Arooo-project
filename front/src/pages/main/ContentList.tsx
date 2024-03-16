import { useQuery } from 'react-query';
import styled from 'styled-components';

import ContentItem from './ContentItem';
import { getContents } from '../../api/content';

type Props = {};

function ContentList({}: Props) {
  const { status, data } = useQuery('contents', getContents);

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
        <ContentItem key={i} {...c} />
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
