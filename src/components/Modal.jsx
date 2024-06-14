import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ card, onClose }) => {
  if (!card) return null;

  const {
    cardAnnual,
    cardDesc,
    cardImg,
    cardName,
    detailInfo
  } = card;

  const {
    BenefitsTitle,
    cardBtnUrl,
    summaryCategorys,
    summaryInfo
  } = detailInfo;

  return (
    <div className='modal_wrapper'>
      <div className='modal_content'>
        <button className='modal_close' onClick={onClose}><IoMdCloseCircleOutline /></button>
        <div className='modal_body'>
          <div className='card_title_box'>
            <div className='card_title_box_left'>
              <img src={cardImg} alt={cardName} />
            </div>
            <div className='card_title_box_right'>
              <div className='modal_card_title'>
                <p>{cardName}</p>
              </div>
              <div className='modal_card_desc'>
                <p><span>연회비</span><br/>{cardAnnual}</p>
                <p>{cardDesc}</p>
              </div>
            </div>
          </div>
          <p className='card_summary_title'>{BenefitsTitle}</p>
          <div className='quic_action_wrap'>
            {summaryCategorys.map((category, index) => (
              <a href={`#${category}`} key={index}>{category}</a>
            ))}
          </div>
          <ul className='summary_wrap'>
            {summaryInfo.map((info, index) => (
                <li id={summaryCategorys[index]} key={index} className='summary_content'>
                    <p className='summary_content_title'>{summaryCategorys[index]}</p>
                    <div className='line'></div>
                    <p
                    className='summary_content_preview'
                    dangerouslySetInnerHTML={{ __html: info.summaryTitles.join('<br/>') }}
                    />
                    <pre className='summary_content_text'>{info.summaryDescs}</pre>
                </li>
            ))}
          </ul>
        </div>
        <Link to={cardBtnUrl} target='_blank' rel='noopener noreferrer' className='card_btn'>카드 신청페이지 바로가기</Link>
      </div>
    </div>
  );
};

export default Modal;
