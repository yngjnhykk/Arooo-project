import styled from 'styled-components';
import logo from '../assets/logo.png';

type Props = {};

function Header({}: Props) {
  return (
    <Wrap>
      {/* <div style={{ fontSize: 25 }}>AROOO</div> */}
      <Logo src={logo} style={{ width: 66, height: 66 }} />
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
