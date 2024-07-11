import React from 'react';
import { useNavigate } from 'react-router-dom';

const MotherChildHandbookIndex = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  // if(role !== 'parent'){
  //   userId = localStorage.getItem('guardianUserId');
  // }

  const pages = [
    // { id: 0, title: "表紙" },
    // { id: 1, title: "戸籍情報" },
    // { id: 2, title: "妊婦の健康状態等" },
    // { id: 3, title: "妊婦の職業と環境" },
    // { id: 4, title: "妊婦自身の記録(1)" },
    // { id: 5, title: "妊婦自身の記録(2)" },
    // { id: 6, title: "妊婦自身の記録(3)" },
    // { id: 7, title: "妊婦自身の記録(4)" },
    // { id: 8, title: "妊娠中の経過(1)" },
    // { id: 10, title: "妊娠中の経過(2)" },
    // { id: 10, title: "検査の記録" },
    // { id: 11, title: "予備欄(医療機関が記入)" },
    // { id: 12, title: "母親学級受講記録" },
    // { id: 13, title: "妊娠中と産後の歯の状態" },
    // { id: 14, title: "出産の状態" },
    // { id: 15, title: "出産後の母体の経過　母親自身の記録" },
    // { id: 16, title: "早期新生児期(生後1週間以内)の経過　後期新生児期(生後1～4週)の経過" },
    // { id: 17, title: "検査の記録　予備欄" },
    // { id: 18, title: "保護者の記録(1か月頃)" },
    // { id: 22, title: "1か月児健康診査" },
    { id: 23, title: "保護者の記録(3～4か月頃)" },
    { id: 24, title: "3～4か月児健康診査" },
  ];

  const handlePageNavigation = (pageId) => {
    navigate(`/page-${pageId}`, {
      state: { userId ,role}
    });
  };

  const handlebackClick = () => {
    navigate('/'); // 遷移先のパスを指定
  };

  return (
    <div>
      <h2>母子手帳目次</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <a href="#" onClick={() => handlePageNavigation(page.id)}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handlebackClick}>戻る</button>
    </div>
  );
};

export default MotherChildHandbookIndex;
