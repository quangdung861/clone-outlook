import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./styles";

const UserLayout = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
};

export default UserLayout;
