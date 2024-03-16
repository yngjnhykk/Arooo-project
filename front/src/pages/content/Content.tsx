import styled from 'styled-components';

import Header from '../../components/Header';
import ContentItem from './ContentItem';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getContent } from '../../api/content';

function Content() {
  const { id } = useParams();
  const contentId = id ? parseInt(id) : 0;

  const { status, data } = useQuery<Content>(['content', contentId], () => getContent(contentId), {});

  console.log('Status:', status);
  // console.log('Data:', data);

  if (status === 'loading' || !data) {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  return (
    <Wrap>
      <Header />
      <ContentItem data={data} />
    </Wrap>
  );
}

export default Content;

const Wrap = styled.div`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
