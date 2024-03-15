import styled from 'styled-components';

import Header from '../../components/Header';
import ContentList from '../main/ContentList';

function Main() {
  return (
    <Wrap>
      <Header />
      <ContentList />
    </Wrap>
  );
}

export default Main;

const Wrap = styled.div`
  width: 100%;
  padding: 30px;
`;
