import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const P24HealthCheck3to4Months = () => {
  const navigate = useNavigate();

  const [editable, setEditable] = useState(false);
  const setterUserId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

const [formData, setFormData] = useState({
    userId:setterUserId,
    checkYear: '',
    checkMonth: '',
    checkDay: '',
    afterBirthMonth: '',
    afterBirthDay: '',
    weight: '',
    height: '',
    chestCircumference: '',
    headCircumference: '',
    nutritionStatus: '',
    feedingMethod: '',
    hipJointLimit: '',
    healthStatus: '',
    specialNotes: '',
    facilityName: '',
    measurementDate: '',
    ageInMonths: '',
    measuredWeight: '',
    measuredHeight: '',
    additionalNotes: '',
    responsibleFacility: '',
  });



  useEffect(() => {

                // ロールによって編集権限を設定
                if (role === 'admin' || role === 'supporter') {
                  setEditable(true);
                } else {
                  setEditable(false);
                }

                const fetchData = async() => {
                  try{
                  
                      // ページ遷移時にuserIdを基にDBからレコードを検索
                      const response = await axios.post('http://localhost:5000/api/recordApi/getrecordP23', { setterUserId });
                      // const response = await axios.post('recordApi/getrecordP23', { userId });
                            let record ;
                  
                            // if(response.data.length === 0){
                              if(response.data === null){ 
                              axios.post('http://localhost:5000/api/recordApi/crerecordP23', formData)
                              .then(response => {
                                record =  Object.values(response.data);
                              })
                              .catch(error => {
                                console.error('There was an error updating the record!', error);
                              });
                            }else{
                              record =  Object.values(response.data);
                            }

          setFormData({
            userId: setterUserId,
            checkYear: record[2],
            checkMonth: record[3],
            checkDay: record[4],
            afterBirthMonth: record[5],
            afterBirthDay: record[6],
            weight: record[7],
            height: record[8],
            chestCircumference: record[9],
            headCircumference: record[10],
            nutritionStatus: record[11],
            feedingMethod: record[12],
            hipJointLimit: record[13],
            healthStatus: record[14],
            specialNotes: record[15],
            facilityName: record[16],
            measurementDate: record[17],
            ageInMonths: record[18],
            measuredWeight: record[19],
            measuredHeight: record[20],
            additionalNotes: record[21],
            responsibleFacility: record[22],
          });

          console.log(formData);
        
    }catch (error) {
        console.error('There was an error fetching the record!', error);
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
    // axios.post('http://localhost:5000/api/recordApi/updrecordP23', { userId,page:'ThreeToFourMonthsHealthCheck', body })
    const response = await axios.put('http://localhost:5000/api/recordApi/updrecordP23', { 
    setterUserId,
    formData
  });
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
      <h2>３～４か月児健康診査</h2>
      <form onSubmit={handleSubmit}>
        <label>
          （
          <select name="checkYear" value={formData.checkYear} onChange={handleChange}>
          <option value=""></option>
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i} value={2010 + i}>{2010 + i}</option>
            ))}
          </select>
          年
          <select name="checkMonth" value={formData.checkMonth} onChange={handleChange}>
            <option value=""></option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          月
          <select name="checkDay" value={formData.checkDay} onChange={handleChange}>
            <option value=""></option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          日実施・
          <input type="number" name="afterBirthMonth" value={formData.afterBirthMonth} onChange={handleChange} />
          か月
          <input type="number" name="afterBirthDay" value={formData.afterBirthDay} onChange={handleChange} />
          日）
        </label>
        <br />
        <label>
          体重:
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        g
        </label>
        <br />
        <label>
          身長:
          <input type="number" name="height" value={formData.height} onChange={handleChange} />
        cm
        </label>
        <br />
        <label>
          胸囲:
          <input type="number" name="chestCircumference" value={formData.chestCircumference} onChange={handleChange} />
        cm
        </label>
        <br />
        <label>
          頭囲:
          <input type="number" name="headCircumference" value={formData.headCircumference} onChange={handleChange} />
        cm
        </label>
        <br />
        <label>
          栄養状態:
          <label><input type="radio" name="nutritionStatus" value="良" checked={formData.nutritionStatus === '良'} onChange={handleChange} /> 良</label>
          <label><input type="radio" name="nutritionStatus" value="要指導" checked={formData.nutritionStatus === '要指導'} onChange={handleChange} /> 要指導</label>
        </label>
        <br />
        <label>
          栄養法:
          <label><input type="radio" name="feedingMethod" value="母乳" checked={formData.feedingMethod === '母乳'} onChange={handleChange} /> 母乳</label>
          <label><input type="radio" name="feedingMethod" value="混合" checked={formData.feedingMethod === '混合'} onChange={handleChange} /> 混合</label>
          <label><input type="radio" name="feedingMethod" value="人工乳" checked={formData.feedingMethod === '人工乳'} onChange={handleChange} /> 人工乳</label>
        </label>
        <br />
        <label>
          股関節開排制限:
          <label><input type="radio" name="hipJointLimit" value="なし" checked={formData.hipJointLimit === 'なし'} onChange={handleChange} /> なし</label>
          <label><input type="radio" name="hipJointLimit" value="あり" checked={formData.hipJointLimit === 'あり'} onChange={handleChange} /> あり</label>
        </label>
        <br />
        <label>
          健康状態:
          <input type="text" name="healthStatus" value={formData.healthStatus} onChange={handleChange} />
        </label>
        <br />
        <label>
          特記事項:
          <input type="text" name="specialNotes" value={formData.specialNotes} onChange={handleChange} />
        </label>
        <br />
        <label>
          施設名または担当者名:
          <input type="text" name="facilityName" value={formData.facilityName} onChange={handleChange} />
        </label>
        <br />
        <label>
          測定実施年月日:
          <input type="text" name="measurementDate" value={formData.measurementDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          月齢:
          <input type="number" name="ageInMonths" value={formData.ageInMonths} onChange={handleChange} />
        </label>
        <br />
        <label>
          体重:
          <input type="number" name="measuredWeight" value={formData.measuredWeight} onChange={handleChange} />
        </label>
        <br />
        <label>
          身長:
          <input type="number" name="measuredHeight" value={formData.measuredHeight} onChange={handleChange} />
        </label>
        <br />
        <label>
          特記事項:
          <input type="text" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} />
        </label>
        <br />
        <label>
          施設名または担当者名:
          <input type="text" name="responsibleFacility" value={formData.responsibleFacility} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">更新</button>
        <button onClick={handlebackClick}>戻る</button>
      </form>
    </div>
  );
};

export default P24HealthCheck3to4Months;
