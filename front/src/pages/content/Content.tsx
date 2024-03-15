import styled from 'styled-components';
import Header from '../../components/Header';
import ContentItem from './ContentItem';

function Content() {
  return (
    <Wrap>
      <Header />
      <ContentItem />
    </Wrap>
  );
}

export default Content;

const Wrap = styled.div`
  width: 100%;
  padding: 30px;
`;
