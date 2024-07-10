import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { format } from 'date-fns';
import moment from 'moment';

const GuardianIndex = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [guardianInfo, setGuardianInfo] = useState({
    myNumber: '',
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    supportProfession: '',
    role: '',
    myNumberHash: '',
    userId: '',
    status: '',
  });

  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {

    const fetchData = async() => {
      try{

        let record;

        setGuardianInfo({
          myNumber: record[1] || '',
          name: record[2] || '',
          birthDate: record[3]|| '',
          address: record[4] || '',
          phoneNumber: record[5] || '',
          email: record[6] || '',
          supportProfession: record[7] || '',
          role: record[8] || '',
          myNumberHash: record[9] || '',
          userId: record[10] || '',
          status: record[11] || ''
  });

  console.log(guardianInfo);
        
}catch (error) {
    console.error('There was an error fetching the data!', error);
  }
};
    fetchData(); 
},  []);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/authApi/getUserById', { email });
      // const response = await axios.post('registerApi/search-guardian', { email });
      if (response.data !== null) {
        setGuardianInfo(response.data);
      } else {
        alert('検索結果が見つかりませんでした。再度お試しください。');
        setGuardianInfo(null);
        // throw error;
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('検索に失敗しました。再度お試しください。');
      setGuardianInfo(null);
    }
  };

  const handleGuardianClick = async () => {
    try {
      // const response = await axios.post('/api/authApi/getUserById', { email: guardianInfo.email });
      // // const response = await axios.post('registerApi/get-guardian-mynumber', { email: guardianInfo.email });
      // if (response.data.success) {
        // localStorage.setItem('guardianUserId', response.data.guardianUserId);
        localStorage.setItem('userId',guardianInfo.userId);
        navigate('/mother-child-handbook-index');
    //   } else {
    //     alert(response.data.message);
    //   }
    } catch (error) {
      console.error('Error during guardian click:', error);
      alert('処理に失敗しました。再度お試しください。');
    }
  };

  return (
    <div>
      <h2>保護者のインデックスページ</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <label>メールアドレス:
          <input type="email" value={email} onChange={handleChange} required />
        </label>
        <button type="submit">検索</button>
      </form>
      {guardianInfo && (
        <div>
          <h3>検索結果</h3>
          <p>メールアドレス: {guardianInfo.email}</p>
          <p>氏名: <a href="#" onClick={handleGuardianClick}>{guardianInfo.name}</a></p>
          <p>生年月日: {guardianInfo.birthDate.slice(0,10)}</p>
          <p>電話番号: {guardianInfo.phoneNumber}</p>
          <button>承認</button>         
        </div>
      )}
    </div>
  );
};

export default GuardianIndex;
