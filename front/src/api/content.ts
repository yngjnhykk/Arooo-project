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
