import React, { useContext, useState, useEffect } from "react";
import { CardMainDataContext } from "../context/CardMainDataProvider";
import Modal from '../components/Modal';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Cardlist = () => {
  const cardData = useContext(CardMainDataContext);
  const [filterCardData, setFilterCardData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBanks, setSelectedBanks] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const query = useQuery();

  const bankNameMap = {
    "KB국민": "KB",
    "삼성": "Samsung",
    "롯데": "Lotte",
    "현대": "Hyundai",
    "우리": "Woori",
    "NH농협": "NH",
    "하나": "Hana",
    "신한": "Sinhan",
    "IBK": "IBK"
  };

  useEffect(() => {
    if (cardData.mainCardData && cardData.mainCardData.length > 0) {
      setFilterCardData(cardData.mainCardData);
    }
  }, [cardData.mainCardData]);

  useEffect(() => {
    const category = query.get('category');
    const bank = query.get('bank');
    const newSelectedCategories = category ? [category] : [];
    const newSelectedBanks = bank ? [bank] : [];

    if (
      JSON.stringify(newSelectedCategories) !== JSON.stringify(selectedCategories) ||
      JSON.stringify(newSelectedBanks) !== JSON.stringify(selectedBanks)
    ) {
      setSelectedCategories(newSelectedCategories);
      setSelectedBanks(newSelectedBanks);
      updateFilteredData(newSelectedCategories, newSelectedBanks);
    }
  }, [query.toString()]);

  const updateFilteredData = (categories, banks) => {
    if (!cardData.mainCardData) return;

    const filterData = cardData.mainCardData.filter(
      (card) =>
        (categories.length === 0 || categories.every((category) =>
          card.detailInfo?.summaryCategorys?.includes(category)
        )) &&
        (banks.length === 0 || banks.includes(card.bankName))
    );
    setFilterCardData(filterData);
  };

  if (
    !cardData ||
    !cardData.mainCardData ||
    cardData.mainCardData.length === 0
  ) {
    return (
      <aside>
        <span style={{ color: "white" }}>Loading...</span>
      </aside>
    );
  }

  const categories = cardData.mainCardData.reduce((acc, card) => {
    if (card.detailInfo && card.detailInfo.summaryCategorys) {
      card.detailInfo.summaryCategorys.forEach((category) => {
        if (!acc.includes(category)) acc.push(category);
      });
    }
    return acc;
  }, []);

  const categorySelect = (category) => {
    const index = selectedCategories.indexOf(category);
    let newSelectedCategories = [...selectedCategories];
    if (index === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(index, 1);
    }
    setSelectedCategories(newSelectedCategories);
    updateFilteredData(newSelectedCategories, selectedBanks);
  };

  const bankSelect = (bank) => {
    const index = selectedBanks.indexOf(bank);
    let newSelectedBanks = [...selectedBanks];
    if (index === -1) {
      newSelectedBanks.push(bank);
    } else {
      newSelectedBanks.splice(index, 1);
    }
    setSelectedBanks(newSelectedBanks);
    updateFilteredData(selectedCategories, newSelectedBanks);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <section className="card_list_section">
      <div className="container">
        <div className="card_list_filter_box">
          <div className="card_list_cartegory">
            <p className="card_filter_title">카드사 선택</p>
            {Object.keys(bankNameMap).map((bank, index) => (
              <span
                key={index}
                onClick={() => bankSelect(bankNameMap[bank])}
                className={selectedBanks.includes(bankNameMap[bank]) ? "clicked" : ""}
              >
                {bank}
              </span>
            ))}
          </div>
          <div className="card_list_cartegory">
            <p className="card_filter_title">혜택 선택</p>
            {categories.map((category, index) => (
              <span
                key={index}
                onClick={() => categorySelect(category)}
                className={selectedCategories.includes(category) ? "clicked" : ""}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="card_result_wrapper">

        {filterCardData.length > 0 ? (
          filterCardData.map((card, idx) => (
            <div
              className='card_content'
              key={idx}
              onClick={() => handleCardClick(card)}
            >
              <div className='card_content_img' style={{ backgroundImage: `url(${card.cardImg})` }}></div>
              <div className='card_text_wrap'>
                <p className='card_title'>{card.cardName}</p>
                <p><span>연회비</span><br />{card.cardAnnual}</p>
                <p>{card.cardDesc}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty_text">해당 조건의 카드가 없습니다.</p>
        )}
        </div>
      </div>
      {showModal && (
        <Modal card={selectedCard} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Cardlist;
