import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  const navigate = useNavigate();

  return (
    <Wrap>
      {/* <div style={{ fontSize: 25 }}>AROOO</div> */}
      <Logo src={logo} style={{ width: 66, height: 66 }} onClick={() => navigate('/')} />
    </Wrap>
  );
}

export default Header;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  cursor: pointer;
  /* &:hover {
    scale: 1.2;
  } */
`;

// const SearchInput = styled.div`
//   width: 100%;
// `;
