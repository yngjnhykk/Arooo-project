import dayjs from 'dayjs';
import styled from 'styled-components';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기
import grayHeart from '../../assets/grayHeart.png';
import redHeart from '../../assets/redHeart.png';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { like } from '../../api/content';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface Props extends Content {
  key: number;
  liked: boolean;
  onClickLike: () => void;
}

function ContentItem(props: Props) {
  // 페이지 이동
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const likeMutation = useMutation(like, {
    onSuccess: () => {
      queryClient.invalidateQueries(['contents']);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // 경과 시간
  const betweenDayTime = dayjs(props.createdAt).fromNow();

  console.log(props.liked);
  return (
    <Wrap
      onClick={(event) => {
        navigate(`/content/${props.id}`);
        event.stopPropagation(); // 버블링을 방지
      }}
    >
      <div style={{ fontWeight: '600' }}>
        {props.title} {props.id}
      </div>
      <InfoWrap>
        <div>{betweenDayTime}</div>
        <div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <Heart
              src={grayHeart}
              onClick={(e) => {
                e.stopPropagation();
                likeMutation.mutate(props.id);
                props.onClickLike();
              }}
            />
            <div>{props.likes}</div>
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

const Heart = styled.img`
  width: 20px;
  &:hover {
    scale: 1.2;
  }
`;
