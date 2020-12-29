import styled from 'styled-components'

export const PlayBarWrapper = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: 73px;
  margin: 0 auto;
  z-index: 100;
  background: #fff;
  box-shadow: 0 5px 40px -1px rgba(2, 10, 18, .1);
  display: flex;
  align-items: center;
  padding: 0 20px;

  .icon-wrapper {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 5px;
    }

    .name {
      padding-left: 20px;

      h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: #333;
      }

      p {
        font-size: 12px;
        color: #999;
        margin: 10px 0 0 0;
      }
    }

  }

  .btn-group {
    padding: 0 20px;
    display: flex;
    align-items: center;

    .btn {

      margin: 0 5px;
      font-size: 40px;

      &:nth-child(2) {
        font-size: 60px;
      }
    }
  }
`