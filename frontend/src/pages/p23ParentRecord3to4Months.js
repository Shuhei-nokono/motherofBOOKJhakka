import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const P23ParentRecord3to4Months = () => {
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);
  const setterUserId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  // axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const [formData, setFormData] = useState({
    // userId:'',
    userId:setterUserId ,
    recordYear: '',
    recordMonth: '',
    recordDay: '',
    neckSupportMonth: '',
    neckSupportDay: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    freeText: ''
  });



  useEffect(() => {

                // ロールによって編集権限を設定
                if (role === 'admin' || role === 'parent') {
                  setEditable(true);
                } else {
                  setEditable(false);
                }

                const fetchData = async() => {
                  try{
                  
                      // ページ遷移時にuserIdを基にDBからレコードを検索
                      const response = await axios.post('/api/recordApi/getrecordP22', { setterUserId })
                      // const response = await axios.post('recordApi/getrecordP22', { userId, page: 'ParentRecordThreeToFourMonths' })
                  
                            let record;
                  
                            // if(response.data.length === 0){
                            if(response.data === null){
                              axios.post('/api/recordApi/crerecordP22',formData)
                              // axios.post('recordApi/crerecordP22', { userId, page: 'ParentRecordThreeToFourMonths', newBody })
                              .then(response => {
                                // record = response.data.body.split(',');
                                record =  Object.values(response.data);
                              })
                              .catch(error => {
                                console.error('There was an error updating the record!', error);
                              });
                            }else{
                              // record = response.data.body.split(',');
                              record =  Object.values(response.data);
                            }

                            

          setFormData({
            userId: setterUserId || '',
            recordYear: record[2] || '',
            recordMonth: record[3] || '',
            recordDay: record[4] || '',
            neckSupportMonth: record[5] || '',
            neckSupportDay: record[6] || '',
            question1: record[7] || '',
            question2: record[8] || '',
            question3: record[9] || '',
            question4: record[10] || '',
            question5: record[11] || '',
            question6: record[12] || '',
            freeText: record[13] || '',
          });

          console.log(formData);
        
    }catch (error) {
        console.error('There was an error fetching the data!', error);
      }
  };
        fetchData(); 
},  [setterUserId]);

  const handleChange = (e) => {
    if (!editable) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!editable) return;
    const updateRecord = async () => {
    try{
    e.preventDefault();
    // const body = Object.values(formData).join(',');
    // const bodyArray = [userId, ...Object.values(formData)];
    // const body = bodyArray.join(',');
    // axios.post('/api/recordApi/updrecordP22', { userId,page:'ParentRecordThreeToFourMonths' ,body })
    const response = await axios.put('/api/recordApi/updrecordP22', {
      setterUserId,
      formData
    });
        // alert('Record updated successfully!');
        navigate('/mother-child-handbook-index');
    }catch(error) {
        console.error('Error updating record:', error);
      };
  };
  updateRecord();
};


  const handlebackClick = () => {
    navigate('/mother-child-handbook-index'); // 遷移先のパスを指定
  };

  return (
    <div>
      <h2>保護者の記録【3～4か月頃】</h2>
      <form onSubmit={handleSubmit}>
        <label>
          記録日:
          <input type="number" name="recordYear" value={formData.recordYear} onChange={handleChange} />
        年
          <input type="number" name="recordMonth" value={formData.recordMonth} onChange={handleChange} />
        月
          <input type="number" name="recordDay" value={formData.recordDay} onChange={handleChange} />
        日
        </label>
        <br />
        <label>
          首が座った日:
          <input type="number" name="neckSupportMonth" value={formData.neckSupportMonth} onChange={handleChange} />
          月
          <input type="number" name="neckSupportDay" value={formData.neckSupportDay} onChange={handleChange} />
          日頃
        </label>
        <br />
        <label>
        あやすとよく笑いますか:
        <br />
        <label>  <input type="radio" name="question1" value="yes" checked={formData.question1 === 'yes'} onChange={handleChange} /> はい</label>
        <label>  <input type="radio" name="question1" value="no" checked={formData.question1 === 'no'} onChange={handleChange} /> いいえ</label>
        </label>
        <br />
        <label>
        目つきや目の動きがおかしいのではないかと
        気になりますか:
        <br />
        <label> <input type="radio" name="question2" value="yes" checked={formData.question2 === 'yes'} onChange={handleChange} /> はい</label>
        <label>  <input type="radio" name="question2" value="no" checked={formData.question2 === 'no'} onChange={handleChange} /> いいえ</label>
        </label>
        <br />
        <label>
        見えない方向から声をかけてみると、
        そちらの方を見ようとしますか:
        <label>  <input type="radio" name="question3" value="yes" checked={formData.question3 === 'yes'} onChange={handleChange} /> はい</label>
        <label>  <input type="radio" name="question3" value="no" checked={formData.question3 === 'no'} onChange={handleChange} /> いいえ</label>
        </label>
        <br />
        <label>
        外気浴をしていますか:
        <br />
        <label>  <input type="radio" name="question4" value="yes" checked={formData.question4 === 'yes'} onChange={handleChange} /> はい</label>
        <label> <input type="radio" name="question4" value="no" checked={formData.question4 === 'no'} onChange={handleChange} /> いいえ</label>
        </label>
        <br />
        <label>
        子育てについて気軽に相談できる人はいますか。:
        <br />
        <label><input type="radio" name="question5" value="yes" checked={formData.question5 === 'yes'} onChange={handleChange} /> はい</label>
        <label> <input type="radio" name="question5" value="no" checked={formData.question5 === 'no'} onChange={handleChange} /> いいえ</label>
        </label>
        <br />
        <label>
          子育てについて不安や困難を感じることは
          ありますか。: </label>
          <br />
          <label><input type="radio" name="question6" value="yes" checked={formData.question6 === 'yes'} onChange={handleChange} /> はい</label>
          <label><input type="radio" name="question6" value="no" checked={formData.question6 === 'no'} onChange={handleChange} /> いいえ</label>
          <label><input type="radio" name="question6" value="unknown" checked={formData.question6 === 'unknown'} onChange={handleChange} /> 何ともいえない</label>
        <br />
        <label>
          成長の様子、育児の心配、かかった病気、感想などを自由に記入しましょ
          う。:
          <br />
          <textarea name="freeText" value={formData.freeText} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">更新</button>　
        <button onClick={handlebackClick}>戻る</button>
      </form>
    </div>
  );
};

export default P23ParentRecord3to4Months;
