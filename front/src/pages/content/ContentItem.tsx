import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한국어 가져오기

import { getContent } from '../../api/content';
import Heart from '../../components/Heart';

dayjs.extend(relativeTime);
dayjs.locale('ko');

function ContentItem() {
  // 파람스를 통해 productId 받아오기 -------------------------

  const { id } = useParams();
  const contentId = id ? parseInt(id) : 0;
  console.log(contentId);

  const { status, data } = useQuery<Content>(['content', contentId], () => getContent(contentId));

  if (status === 'loading' || !data) {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error, please check console</div>;
  }

  // 페이지 이동
  const navigate = useNavigate();

  // 경과 시간
  const betweenDayTime = dayjs(data.createdAt).fromNow();

  return (
    <Wrap
      onClick={() => {
        navigate(`/content/${data.id}`);
      }}
    >
      <div style={{ fontWeight: '600' }}>
        {data.title} {data.id}
      </div>
      <InfoWrap>
        <div>{betweenDayTime}</div>
        <div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <Heart id={data.id} />
            <div>{data.likes}</div>
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
