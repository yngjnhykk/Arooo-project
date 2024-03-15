import styled from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Content from './pages/content/Content';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/content' element={<Content />} />
      </Routes>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 768px;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
    'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  @media only screen and (max-width: 768px) {
    /* width: 100%; */
  }

  /* 모바일 사이즈에 대한 스타일 */
  @media only screen and (max-width: 480px) {
    width: 100%;
    /* 원하는 모바일 사이즈에 대한 스타일을 여기에 작성합니다 */
  }
`;
