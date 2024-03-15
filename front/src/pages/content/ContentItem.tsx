import dayjs from 'dayjs';
import styled from 'styled-components';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기
import grayHeart from '../../assets/grayHeart.png';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface Props extends Content {
  key: number;
}

function ContentItem(props: Props) {
  // 경과 시간
  const betweenDayTime = dayjs(props.createdAt).fromNow();

  return (
    <Wrap>
      <div style={{ fontWeight: '600' }}>
        {props.title} {props.id}
      </div>
      <InfoWrap>
        <div>{betweenDayTime}</div>
        <div>
          <div>
            <GrayHeart src={grayHeart} />
            {props.likes}
          </div>
        </div>
      </InfoWrap>
    </Wrap>
  );
}

export default ContentItem;

const Wrap = styled.div`
  width: 80%;
  padding: 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GrayHeart = styled.img`
  width: 20px;
  &:hover {
    scale: 1.2;
  }
`;
