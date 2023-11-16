import React from "react";
import * as S from "./styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MailPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Sidebar />
        <div className="container-email">
          <div className="container-email__bar">
            <div className="top-bar">
              <div className="btn-navigate">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
              <div className="btn-action-list">
                <div className="btn-action-item home">
                  <span>Home</span>
                  <div className="selected-line"></div>
                </div>
                <div className="btn-action-item">
                  <span>View</span>
                </div>
                <div className="btn-action-item">
                  <span>Help</span>
                </div>
              </div>
            </div>
            <div className="bottom-bar">
              <div className="bottom-bar__action-list">
                <div className="btn-new-mail">
                  <i className="fa-regular fa-envelope"></i>
                  <span>New mail</span>
                </div>
                <div className="btn btn-more">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="btn btn-delete">
                  <i className="fa-regular fa-trash-can"></i>
                </div>
                <div className=" btn btn-box">
                  <i
                    className="fa-solid fa-box-archive"
                    style={{ color: "rgb(73, 130, 5)" }}
                  ></i>
                </div>
                <div className=" btn btn-security">
                  <i
                    className="fa-solid fa-shield-halved"
                    style={{ color: "rgb(164, 38, 44)" }}
                  ></i>
                </div>
                <div className=" btn btn-clear">
                  <i className="fa-solid fa-broom"></i>
                </div>
                <div className=" btn btn-folder">
                  <i
                    className="fa-regular fa-folder-open"
                    style={{ color: "rgb(0, 120, 212)" }}
                  ></i>
                </div>
                <div className="division-line"></div>

                <div className=" btn btn-share">
                  <i
                    className="fa-solid fa-share fa-flip-horizontal"
                    style={{ color: "rgb(136, 23, 152)" }}
                  ></i>
                </div>
                <div className="btn btn-shares">
                  <i
                    className="fa-solid fa-share-from-square fa-flip-horizontal"
                    style={{ color: "rgb(136, 23, 152)" }}
                  ></i>
                </div>
                <div className="btn btn-share">
                  <i
                    className="fa-solid fa-share"
                    style={{
                      color: "rgb(0, 120, 212)",
                    }}
                  ></i>
                </div>
                <div className="division-line"></div>

                <div className="btn btn-quick-steps">
                  <i
                    className="fa-solid fa-cloud-bolt"
                    style={{
                      marginTop: "2px",
                      marginRight: "10px",
                      color: "#AA8413",
                    }}
                  ></i>
                  <span>Quick steps</span>
                </div>

                <div className="btn btn-mark-all-as-red">
                  <i
                    className="fa-solid fa-envelope-open"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <span>Mark all as read</span>
                </div>
                <div className="btn btn-tag">
                  <i className="fa-solid fa-tag"></i>
                </div>
                <div className="btn btn-flag">
                  <i
                    className="fa-regular fa-flag"
                    style={{ color: "rgb(164, 38, 44)" }}
                  ></i>
                </div>
                <div className="btn btn-pin">
                  <i
                    className="fa-solid fa-map-pin"
                    style={{
                      color: "rgb(0, 120, 212)",
                    }}
                  ></i>
                </div>
                <div className="btn btn-clock">
                  <i className="fa-regular fa-clock"></i>
                </div>
                <div className="btn btn-box">
                  <i
                    className="fa-solid fa-box-archive"
                    style={{
                      color: "rgb(0, 120, 212)",
                    }}
                  ></i>
                </div>

                <div className="division-line"></div>

                <div className="btn btn-print">
                  <i className="fa-solid fa-print"></i>
                </div>

                <div className="division-line"></div>
                <div className="btn btn-forward">
                  <i className="fa-solid fa-rotate-right"></i>
                </div>

                <div className="division-line"></div>
                <div className="btn btn-more-right">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container-main">
            <div className="mail-list">
              <div className="mail-list__top">
                <div className="left">
                  <div className="btn-focused">Focused</div>
                  <div className="btn-other">Other</div>
                </div>
                <div className="right">
                  <div className="btn-select">
                    <i className="fa-regular fa-file"></i>
                  </div>
                  <div className="btn-filter">
                    <i className="fa-solid fa-filter"></i>
                  </div>
                </div>
              </div>

              <div className="mail-list__content">
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <div className="mail-list__content__item" key={index}>
                      <div className="left">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                          alt=""
                        />
                      </div>
                      <div className="center">
                        <div className="content-email">
                          <div className="display-name">Abel Phan</div>
                          <div className="sub-name">
                            <div className="title">
                              Lorem Ipsum is simply dummy text of the printing
                              and
                            </div>
                            <div className="time"> 5:43 AM </div>
                          </div>
                          <div className="description">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </div>
                        </div>
                      </div>
                      <div className="btn-delete">
                        <i className="fa-regular fa-trash-can"></i>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mail-content"></div>
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default MailPage;
