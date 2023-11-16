import styled from "styled-components";
import asd from "assets/images/themeBg.jpg";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  .container-email {
    width: 100%;
    overflow: hidden;
    &__bar {
      .top-bar {
        height: 36px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .btn-navigate {
          width: 40px;
          height: 100%;
          border-radius: 4px;
          margin-top: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 12px;
          cursor: pointer;
          > i {
            font-size: 18px;
          }
          &:hover {
            background-color: #f1f1f1;
          }
        }
        .btn-action-list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;

          .btn-action-item {
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            user-select: none;
            &:hover {
              background-color: #f1f1f1;
            }
          }
          .home {
            > span {
              font-weight: 500;
            }
            .selected-line {
              width: 100%;
              height: 3px;
              margin-top: -3px;
              background-color: #0f6cbd;
            }
            &:hover {
              .selected-line {
                transition: all 0.3s ease;
                width: calc(100% + 20px);
                margin-left: -10px;
              }
            }
          }
        }
      }
      .bottom-bar {
        height: 40px;
        padding: 3px 8px;
        margin: 0 8px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        overflow: hidden;
        &__action-list {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          user-select: none;
          .btn-new-mail {
            width: fit-content;
            padding: 0 12px;
            height: 32px;
            background-color: #0f6cbd;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
            transition: all 0.2s ease;
            white-space: nowrap;
            > i {
              margin-right: 12px;
              margin-top: 3px;
            }
            &:hover {
              cursor: pointer;
              background-color: #0f548c;
            }
          }
          .btn-more {
            width: fit-content;
            padding: 0 12px;
            height: 32px;
            margin: 0 12px 0 1px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0f6cbd;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
            transition: all 0.2s ease;
            &:hover {
              cursor: pointer;
              background-color: #0f548c;
            }
          }

          > .btn {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            padding: 0 9px;
            > span {
              white-space: nowrap;
            }
          }

          > .btn:not(.btn-quick-steps, .btn-mark-all-as-red, .btn-more-right) {
            opacity: 0.3;
            pointer-events: none;
          }

          .btn-quick-steps,
          .btn-mark-all-as-red {
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-left: 4px;
            &:hover {
              background-color: #f1f1f1;
            }
          }

          .btn-more-right {
            border-radius: 4px;
            margin-left: 4px;
            &:hover {
              background-color: #f1f1f1;
            }
          }

          .division-line {
            width: 0.5px;
            height: 32px;
            background-color: #ccc;
          }
        }
      }
    }
    .container-main {
      display: flex;
      height: calc(100vh - 132px);
      margin: 8px 8px 0;
      gap: 8px;
      overflow: hidden;
      > .mail-list {
        min-width: 320px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        .mail-list__top {
          height: 44px;
          padding-top: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 60px;
          border-bottom: 1px solid #ccc;
          user-select: none;
          .left {
            display: flex;
            align-items: center;
            > div {
              height: 32px;
              padding: 4px 16px;
              border-radius: 4px;
              &:hover {
                background-color: #f1f1f1;
                cursor: pointer;
              }
            }
          }
          .right {
            display: flex;
            align-items: center;
            > div {
              height: 32px;
              padding: 4px 8px;
              border-radius: 4px;
              &:hover {
                background-color: #f1f1f1;
                cursor: pointer;
              }
            }
          }
        }
        .mail-list__content {
          height: calc(100% - 44px);
          overflow: hidden;
          overflow-y: overlay;
          &::-webkit-scrollbar {
            --webkit-appearance: none;
          }
          &::-webkit-scrollbar:vertical {
            width: 8px;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #e2e1e1;
          }
          .mail-list__content__item {
            display: flex;
            gap: 10px;
            height: 80px;
            overflow: hidden;
            transition: all 0.2s ease;
            .left {
              padding: 8px 4px;
              > img {
                width: 40px;
                height: 40px;
                margin-left: 4px;
                object-fit: cover;
                border-radius: 50%;
                border: 1px solid #ccc;
                cursor: pointer;
              }
            }
            .center {
              display: flex;
              gap: 10px;
              padding: 8px 0px;
              margin-right: 8px;
              .content-email {
                .display-name {
                  font-weight: 500;
                }
                .sub-name {
                  display: flex;
                  justify-content: space-between;
                  .time {
                    font-weight: 500;
                    margin-left: 2px;
                    white-space: nowrap;
                    color: #0f6cbd;
                    user-select: none;
                  }
                  .title {
                    font-weight: 500;
                    color: #0f6cbd;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    user-select: none;
                  }
                }

                .description {
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  margin-right: 24px;
                  user-select: none;
                }
              }
            }
            .btn-delete {
              display: none;
              padding: 0 10px;
              background-color: #ffe6e6;
              align-items: center;
              cursor: pointer;
              > i {
                font-size: 16px;
                color: #ff4d4d;
              }
            }
            &:hover {
              background-color: #f1f1f1;
              .btn-delete {
                display: flex;
              }
            }
          }
        }
      }

      > .mail-content {
        flex: 1;
        /* background-color: rgba(0, 0, 0, 0.2); */
        background-blend-mode: multiply; /* Áp dụng chế độ blend */
        background-image: url("https://www.hdwallpapers.in/download/beautiful_beach_scenery_waves_under_blue_sky_4k_hd_nature-HD.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 4px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .mail-list {
      flex: 1;
    }
    .mail-content {
      display: none;
    }
  }
`;
