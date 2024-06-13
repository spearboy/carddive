import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/carddive_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="로고" />
        </div>
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
            <Link to={"/cards"}>BC바로카드</Link>
          </li>
          <li>
            <Link to={"/cards"}>IBK기업은행</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
