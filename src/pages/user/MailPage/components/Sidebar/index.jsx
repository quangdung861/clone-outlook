import React, { useState } from "react";

import * as S from "./styles";
import cloudImg from "assets/images/cloud.png";
import checkImg from "assets/images/check.png";

const Sidebar = () => {
  const [actionSelected, setActionSelected] = useState("mail");

  const actionList = [
    {
      id: "mail",
      title: "Mail",
      classIcon: "fa-regular fa-envelope",
      image: "",
    },
    {
      id: "calendar",
      title: "Calendar",
      classIcon: "fa-regular fa-calendar",
      image: "",
    },
    {
      id: "people",
      title: "people",
      classIcon: "fa-solid fa-user-group",
      image: "",
    },
    {
      id: "files",
      title: "Files",
      classIcon: "fa-regular fa-file",
      image: "",
    },
    {
      id: "todo",
      title: "To Do",
      classIcon: "",
      image: checkImg,
    },
    {
      id: "cloud",
      title: "Go to OneDrive for Business",
      classIcon: "",
      image: cloudImg,
    },
    {
      id: "iron",
      title: "iron",
      classIcon: "fa-solid fa-layer-group",
      image: "",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <div className="sidebar">
          <div className="action-list">
            {actionList?.map((item) => (
              <div
                key={item.id}
                className={
                  item.id === actionSelected
                    ? "action-item active"
                    : "action-item"
                }
                title={item.title}
                onClick={() => setActionSelected(item.id)}
              >
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <i className={item.classIcon}></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default Sidebar;
