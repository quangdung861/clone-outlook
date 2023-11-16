import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/index";
import logoOutlook from "../../../assets/images/outlookLogo.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <div className="home">
          <div className="header">
            <img src={logoOutlook} alt="logo outlook" className="logo" />
          </div>
          <div className="box-direct">
            <div
              className="btn-direct"
              onClick={() => navigate(ROUTES.USER.MAIL)}
            >
              See Mail
            </div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default HomePage;
