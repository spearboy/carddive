import React, { useContext, useState, useEffect } from "react";
import { CardMainDataContext } from "../context/CardMainDataProvider";

const Cardlist = () => {
  const cardData = useContext(CardMainDataContext);
  const [filterCardData, setFilterCardData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBanks, setSelectedBanks] = useState([]); // 선택된 은행을 관리할 상태

  const cardBanks = [
    "Hana",
    "Hyundai",
    "IBK",
    "KB",
    "Lotte",
    "NH",
    "Samsung",
    "Sinhan",
    "Woori",
  ];

  useEffect(() => {
    if (cardData.mainCardData && cardData.mainCardData.length > 0) {
      setFilterCardData(cardData.mainCardData);
    }
  }, [cardData.mainCardData]);

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

  // 은행 선택 함수
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

  const updateFilteredData = (categories, banks) => {
    const filterData = cardData.mainCardData.filter(
      (card) =>
        categories.every((category) =>
          card.detailInfo.summaryCategorys.includes(category)
        ) &&
        (banks.length === 0 || banks.includes(card.bankName))
    );
    setFilterCardData(filterData);
    console.log(filterData);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Card Categories and Banks</h2>
      <ul
        style={{
          color: "white",
          marginTop: "20px",
          cursor: "pointer",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => categorySelect(category)}
            className={selectedCategories.includes(category) ? "clicked" : ""}
            style={{
              color: selectedCategories.includes(category) ? "red" : "white",
              margin: "5px",
            }}
          >
            {category}
          </li>
        ))}
        {cardBanks.map((bank, index) => (
          <li
            key={index}
            onClick={() => bankSelect(bank)}
            className={selectedBanks.includes(bank) ? "clicked" : ""}
            style={{
              color: selectedBanks.includes(bank) ? "red" : "white",
              margin: "5px",
            }}
          >
            {bank}
          </li>
        ))}
      </ul>
      <div
        style={{
          color: "white",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {filterCardData.map((card, idx) => (
          <span key={idx} style={{ color: "white", margin: "5px" }}>
            {card.cardName} ({card.bankName})
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cardlist;
