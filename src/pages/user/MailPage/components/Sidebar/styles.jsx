import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  .sidebar {
    width: 48px;
    min-height: calc(100vh - 48px);
    background-color: #f0f0f0;
    .action-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .action-item {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        transition: all 0.2s ease;
        cursor: pointer;
        > img {
          width: 16px;
          height: 16px;
        }
        &:hover {
          background-color: #fff;
          color: #0f6cbd;
        }
      }
      .action-item:not(:last-child) {
        margin: 3px 0;
      }
      .action-item.active {
        border-left: 3px solid #0f6cbd;
        color: #0f6cbd;
      }
    }
  }
`;
