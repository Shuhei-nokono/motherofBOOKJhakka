import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InitialRegistration = () => {
  const navigate = useNavigate();
const [formData, setFormData] = useState({
    // userId:'',
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    myNumber: '',
    role: 'parent'  
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/authApi/register', formData);
      // const response = await axios.post('authApi/register', formData);
      if (response.data) {
        alert('登録が成功しました');
        navigate('/');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('登録に失敗しました。再度お試しください。');
    }
  };

  return (
    <div>
      <h2>初回登録ページ</h2>
      <form onSubmit={handleSubmit}>
        <label>氏名:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label><br />
        <label>生年月日:
          <input type="Date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </label><br />
        <label>住所:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label><br />
        <label>電話番号:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label><br />
        <label>メールアドレス:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label><br />
        <label>マイナンバー:
          <input type="text" name="myNumber" value={formData.myNumber} onChange={handleChange} required />
        </label><br />
        <div>
              <input
                type="radio"
            id="guardian"
                name="role"
                value="parent"
                checked={formData.role === 'parent'}
                onChange={handleRoleChange}
              /> 
                        <label htmlFor="guardian">保護者</label>
            </div>
            <div>
              <input
                type="radio"
                            id="admin"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleRoleChange}
              /> 
              <label htmlFor="admin">行政</label>
            </div>
            <div>
              <input
                type="radio"
                            id="supporter"
                name="role"
                value="supporter"
                checked={formData.role === 'supporter'}
                onChange={handleRoleChange}
              /> 
                        <label htmlFor="supporter">支援者</label>
            </div>
            <label>職業:
            <select>
        <option ></option>
          <option>医師</option>
          <option>看護師</option>
          <option>保険師</option>
          <option>助産師</option>
        </select><br />
        <label>医師免許ID:
          <input />
        </label><br />
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default InitialRegistration;
