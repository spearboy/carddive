import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/carddive_logo.svg";

const Header = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgClass, setImgClass] = useState('');
  const [pClass, setPClass] = useState('');

  useEffect(() => {
    if (location.pathname !== "/") {
      // 페이지가 /가 아닐 때 애니메이션 실행
      setImgClass('move');
      setTimeout(() => {
        setIsExpanded(true);
        setTimeout(() => {
          setPClass('visible');
        }, 500); // width가 100%가 된 후 0.5초 후에 나타나도록 설정
      }, 300);
    } else {
      // 페이지가 /일 때 원래대로 돌아오기
      setPClass('hidden');
      setTimeout(() => {
        setImgClass('reset');
        setTimeout(() => {
          setIsExpanded(false);
        }, 300); // 0.3초 후에 width 값을 변경
      }, 500); // opacity가 0이 된 후 실행
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <Link 
          className={`logo ${isExpanded ? "expand" : ""}`} 
          to={'/'}
        >
          <p className={pClass}>여기를 클릭하면 다시 메인으로 돌아갑니다.</p>
          <img src={logo} alt="로고" className={imgClass} />
        </Link>
        <ul className="header_menu">
          <li>
            <Link to={"/cards"}>KB국민카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>삼성카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>롯데카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>현대카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>우리카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>NH농협카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>하나카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>신한카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>IBK카드</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
