import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  .home {
    width: 100%;
    user-select: none;
    .header {
      font-size: 30px;
      margin-bottom: 24px;
      text-align: center;
      > .logo {
        width: 100%;
        max-width: 60px;
        max-height: 60px;
        margin-top: 24px;
        cursor: pointer;
      }
    }
    .box-direct {
      display: flex;
      justify-content: center;
      .btn-direct {
        width: 160px;
        height: 40px;
        padding: 24 8px;
        line-height: 40px;
        border-radius: 6px;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        background-color: #ccc;
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }
  }
`;
