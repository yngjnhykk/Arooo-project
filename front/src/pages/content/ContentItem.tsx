import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기

import Heart from '../../components/Heart';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface Props {
  data: Content;
}

function ContentItem(props: Props) {
  // 페이지 이동
  const navigate = useNavigate();

  // 경과 시간
  const betweenDayTime = dayjs(props.data.createdAt).fromNow();

  return (
    <Wrap
      onClick={() => {
        navigate(`/content/${props.data.id}`);
      }}
    >
      <div style={{ fontWeight: '600' }}>
        {props.data.title} {props.data.id}
      </div>
      <InfoWrap>
        <div>{betweenDayTime}</div>
        <div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center', width: 45 }}>
            <Heart id={props.data.id} />
            <div>{props.data.likes}</div>
          </div>
        </div>
      </InfoWrap>
    </Wrap>
  );
}

export default ContentItem;

const Wrap = styled.div`
  width: 80%;
  padding: 20px 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #737373;
  font-weight: 500;
`;
