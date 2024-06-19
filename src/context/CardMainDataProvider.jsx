import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CardMainDataContext = createContext();

const CardMainDataProvider = ({ children }) => {
    const [mainCardData, setMainCardData] = useState(null);
    

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                const yesterDay = yesterday.toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 변환

                // 카드 상세 정보 수집
                const detailRes = await axios.get(`https://raw.githubusercontent.com/jaehyuk-lee-0712/cardDataScrap/main/scrapList/scrapCardDetail_2024-06-13.json`);
                // const detailRes = await axios.get(`https://raw.githubusercontent.com/jaehyuk-lee-0712/cardDataScrap/main/scrapList/scrapCardDetail_${yesterDay}.json`);
                if(detailRes.data.length === 0 || detailRes.data === null || detailRes.data === undefined) {
                    return <div>데이터 오류 발생.</div>
                }

                // 카드 기본 정보 수집
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

                let allBasicData = [];
            

                for (let i = 0; i < cardBanks.length; i++) {
                    const res = await axios.get(`https://raw.githubusercontent.com/jaehyuk-lee-0712/cardDataScrap/main/scrapList/card${cardBanks[i]}_2024-06-13.json`);
                    

                    if(res.data.length > 0) {
                        const enhancedData = res.data.map(card => ({
                            ...card,
                            bankName: cardBanks[i]  // 각 카드 데이터에 은행 이름 추가
                        }));
                        
                        allBasicData.push(...enhancedData); // 모든 기본 데이터를 배열에 추가
                    }
                }

                if(allBasicData.length >0 && detailRes.data.length >0) {
                    const updateData = allBasicData.map(card=> {
                        const detailInfo = detailRes.data.find(detail => detail.cardName === card.cardName)            
                        return {...card , detailInfo}
                    })
                    console.log(updateData);
                    setMainCardData(updateData);
                }

                
            } catch (error) {
                console.log("데이터 오류 발생, 관리자에게 연락바람.", error);
            }
        };
        fetchCardData();
    }, []);
    return (
        <CardMainDataContext.Provider value={{ mainCardData }}>
            {children}
        </CardMainDataContext.Provider>
    );
}

export default CardMainDataProvider;
