import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  .header {
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--bg-color-gray);
    &__left {
      .btn-menu {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        > i {
          font-size: 20px;
          color: #616161;
        }
        &:hover {
          background-color: #fff;
        }
      }
    }

    &__center {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      .logo {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0f6cbd;
        font-size: 16px;
        font-weight: 500;
        padding: 0 12px 0 8px;
        margin-right: 150px;
        user-select: none;
        cursor: pointer;
      }
      .box-search {
        max-width: 350px;
        width: 100%;
        height: 32px;
        margin-right: 12px;
        background-color: #fff;
        border-radius: 4px;
        padding: 4px 12px;
        display: flex;
        align-items: center;
        border: 1px solid #f1f1f1;
        > i {
          font-size: 14px;
          margin-right: 8px;
          color: #616161;
        }
        > input {
          border: none;
          outline: none;
          width: 100%;
        }
        >i.filter {
          display: none;
        }
        &:hover {
          >i.filter {
            display: block;
            color: #ccc;
            cursor: pointer;
          }
        }
      }
      .list-action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        overflow: hidden;
        width: 0px;
        .btn-teams-call {
          height: 48px;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          > i {
            color: #616161;
            margin-bottom: -2px;
          }
          span {
            margin-left: 16px;
            white-space: nowrap;
          }
          &:hover {
            background-color: #fff;
          }
        }
        .btn-action {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          > i {
            font-size: 16px;
          }
          &:hover {
            background-color: #fff;
          }
        }
      }
    }

    &__right {
      .btn-account {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .avatar-user {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          object-fit: cover;
        }
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
`;
