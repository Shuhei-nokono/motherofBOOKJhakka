import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode }  from 'jwt-decode';

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/authApi/login', loginData);
      // const response = await axios.post('authApi/login', loginData);
      // const { user, token } = response.data;
      if (response.data.token) {
        const token = response.data.token;
      localStorage.setItem('token',token); 

                  // トークンをデコードしてペイロードのデータを取得
                  const decodedToken = jwtDecode(token);
                  console.log(decodedToken); // デコードされたトークンのデータを表示
                  localStorage.setItem('userId',decodedToken.userId);
                  localStorage.setItem('role',decodedToken.role);

            if (decodedToken.role === 'parent'){
              navigate('/mother-child-handbook-index');
            }else{
              navigate('/guardian-index');
            }
          } else {
            alert(response.data.message);
          }
    } catch (error) {
      console.error('Error during login:', error);
      alert('ログインに失敗しました。再度お試しください。');
    }
  };

  return (
    <div>
      <h2>ログインページ</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="email" name="email" value={loginData.email} onChange={handleChange} required 
          placeholder='メールアドレス'/>
        </label><br />
        <label>
          <input type="text" name="password" value={loginData.password} onChange={handleChange} required 
          placeholder='マイナンバーの下4桁'/>
        </label><br />
        <button type="submit">ログイン</button>
      </form>
      <button onClick={() => navigate('/Initial-registration-page')}>初回登録ページへ</button>
    </div>
  );
}

export default LoginPage;
