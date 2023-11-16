import React from "react";

import * as S from "./styles";
import avatarUser from "assets/images/avatarUser.jpg";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div className="header">
          <div className="header__left">
            <div className="btn-menu">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="header__center">
            <div className="logo">Outlook</div>
            <div className="box-search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" />
              <i className="fa-solid fa-arrow-down-wide-short filter"></i>
            </div>

            <div className="list-action">
              <div className="btn-teams-call">
                <i className="fa-solid fa-video"></i>
                <span>Teams call</span>
              </div>
              <div className="btn-action" title="chat">
                <i className="fa-regular fa-comments"></i>
              </div>
              <div className="btn-action" title="oneNote feed">
                <i className="fa-solid fa-book"></i>
              </div>
              <div className="btn-action" title="My Day">
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="btn-action" title="notifications">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="btn-action" title="settings">
                <i className="fa-solid fa-gear"></i>
              </div>
              <div className="btn-action" title="Tips">
                <i className="fa-regular fa-lightbulb"></i>
              </div>
            </div>
          </div>
          <div className="header__right">
            <div className="btn-account">
              <img src={avatarUser} alt="avatar" className="avatar-user" />
            </div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
