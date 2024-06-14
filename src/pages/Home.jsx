import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardMainDataContext } from '../context/CardMainDataProvider';

const Home = () => {
  const { mainCardData } = useContext(CardMainDataContext);

  const cardBanks = [
    "Hana",
    "Hyundai",
    "IBK",
    "KB",
    "Lotte",
    "NH",
    "Samsung",
    "Sinhan",
    "Woori"
  ];

  const cardBanksText = {
    'KB': 'KB국민',
    'Samsung': '삼성',
    'Lotte': '롯데',
    'Hyundai': '현대',
    'Woori': '우리',
    'NH': 'NH농협',
    'Hana': '하나',
    'Sinhan': '신한',
    'IBK': 'IBK'
  };

  const navigate = useNavigate();
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    if (mainCardData) {
      const groupedData = cardBanks.reduce((acc, bank) => {
        acc[bank] = mainCardData.filter(card => card.bankName === bank).slice(0, 4);
        return acc;
      }, {});
      setCardData(groupedData);
    }
  }, [mainCardData]);

  const handleCategoryClick = (category) => {
    navigate(`/cards?category=${category}`);
  };

  return (
    <>
      <div className='container home_container'>
        <section className='section_hero'>
          <div className='hero_wrap'>
            <p className='hero_title'>
              <span>신용카드의 모든 정보를 담다. 신용카드 아마존 카드다이브</span>
            </p>
            <h2>CARDIVE</h2>
            <div className='card_line'>
              <p>모든 카드 정보가 궁금하다면? 카드 전체 정보 확인하기</p>
              <Link to={'/cards'}>CLICK</Link>
            </div>
          </div>
        </section>
      </div>
      <section className='section_category'>
        <div className='container'>
          <div className='section_title_wrapper'>
            <h3 className='section_title'>카드 혜택 선택</h3>
          </div>
          <div className='category_wrapper'>
            {[
              "바우처", "프리미엄", "포인트/캐시백", "간편결제", "항공마일리지",
              "Priority Pass", "주유", "대중교통", "카페/베이커리", "쇼핑", "관리비",
              "의료", "언제나할인", "편의점", "문화", "통신", "대형마트", "레저",
              "영화", "연회비지원", "외식", "뷰티", "렌탈", "오토", "교육", "육아",
              "반려동물", "금융", "하이패스", "국민행복카드", "그린카드", "체크카드겸용",
              "THE CJ 카드", "납부 혜택", "경차유류환급"
            ].map((category, index) => (
              <div key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
      {cardBanks.map(bank => (
        cardData[bank] && (
          <section className='section_list' key={bank}>
            <div className='container'>
              <div className='section_title_wrapper'>
                <h3 className='section_title'>{cardBanksText[bank]}카드</h3>
                <Link to={`/cards?bank=${bank}`}>전체보기</Link>
              </div>
              <div className='card_list_wrapper'>
                {cardData[bank].map((card, index) => (
                  <div className='card_content' key={index}>
                    <div className='card_content_img' style={{backgroundImage:`url(${card.cardImg})`}}></div>
                    <div className='card_text_wrap'>
                      <p className='card_title'>{card.cardName}</p>
                      <p>연회비: {card.cardAnnual}</p>
                      <p>{card.cardDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      ))}
    </>
  );
}

export default Home;
