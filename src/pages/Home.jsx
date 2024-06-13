import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='container home_container'>
        <section className='section_hero'>
          <div className='hero_wrap'>
            <p className='hero_title'>
              <span>
                신용카드의 모든 정보를 담다. 신용카드 아마존 카드다이브
              </span>
              </p>
            <h2>CARDIVE</h2>
            <div className='card_line'>
              <p>모든 카드 정보가 궁금하다면? 카드 전체 정보 확인하기</p>
              <div>CLICK</div>
            </div>
          </div>
        </section>
      </div>
      <section className='section_category'>
        <div className='container'>
          <div className='section_title_wrapper'>
            <h3 className='section_title'>
              카드 혜택 선택
            </h3>
          </div>
          <div className='category_wrapper'>
            <div>바우처</div>
            <div>프리미엄</div>
            <div>포인트/캐시백</div>
            <div>간편결제</div>
            <div>항공마일리지</div>
            <div>Priority Pass</div>
            <div>주유</div>
            <div>대중교통</div>
            <div>카페/베이커리</div>
            <div>쇼핑</div>
            <div>관리비</div>
            <div>의료</div>
            <div>언제나할인</div>
            <div>편의점</div>
            <div>문화</div>
            <div>통신</div>
            <div>대형마트</div>
            <div>레저</div>
            <div>영화</div>
            <div>연회비지원</div>
            <div>외식</div>
            <div>뷰티</div>
            <div>렌탈</div>
            <div>오토</div>
            <div>교육</div>
            <div>육아</div>
            <div>반려동물</div>
            <div>금융</div>
            <div>하이패스</div>
            <div>국민행복카드</div>
            <div>그린카드</div>
            <div>체크카드겸용</div>
            <div>THE CJ 카드</div>
            <div>납부 혜택</div>
            <div>경차유류환급</div>
          </div>
        </div>
      </section>
      <section className='section_list'>
        <div className='container'>
          <div className='section_title_wrapper'>
            <h3 className='section_title'>
              현대카드
            </h3>
            <Link to={'/card'}>전체보기</Link>
          </div>
          <div className='card_list_wrapper'>
            <div className='card_content'>
                <div className='card_content_img'></div>
                
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home