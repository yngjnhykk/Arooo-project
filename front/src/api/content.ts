import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3066';

// 게시글 전체 조회
export const getContents = async () => {
  try {
    const response = await axios.get('/library/content?skip=0&limit=10');
    return response.data;
  } catch (err) {
    console.log('fetch 실패 : ', err);
  }
};

// 게시글 한 개 조회
export const getContent = async (contentId: number) => {
  try {
    const response = await axios.get(`/library/content/${contentId}`);
    return response.data;
  } catch (err) {
    console.log('fetch 실패 : ', err);
  }
};

// 좋아요
export const like = async (contentId: number) => {
  try {
    const response = await axios.post(`/library/content/${contentId}/like`);
    return response.data;
  } catch (err) {
    console.log('fetch 실패 : ', err);
  }
};
