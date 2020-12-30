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

  padding: 0 20px;

  .ant-slider-track {
    background-color: #e03997;
  }

  .ant-slider-handle {
    border: solid 2px #683a71;
  }

  .ant-slider:hover .ant-slider-track {
    background-color: #e03997;
  }

  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #683a71;
  }

  .play-bar {
    width: 1380px;
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 auto;
  }

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
      text-align: center;

      h2 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }

      p {
        font-size: 12px;
        color: #999;
        margin: 7px 0 0 0;
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

  .slider-wrapper {
    display: flex;
    align-items: center;

    .slider {
      width: 580px;
    }

    .time {
      padding: 0 10px;
      width: 100px;
      box-sizing: border-box;
    }

    .sound-wrapper {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 20px;

      .btn {
        font-size: 25px;
        padding: 0 5px;
      }

      .slider {
        width: 120px;
      }
    }


  }

  .icon-group {
    display: flex;
    align-items: center;

    .btn {
      font-size: 30px;
      margin: 0 5px;

    }
  }


`