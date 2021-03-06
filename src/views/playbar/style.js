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
    position: relative;
    z-index: 110;
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

  .bar-drawer {
    margin: 0 auto;
    width: 986px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 74px;
    z-index: 99;

    .ant-drawer, .ant-drawer-content-wrapper, .ant-drawer-content {
      border-radius: 10px 10px 0 0;
    }

    .ant-drawer-mask {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 74px;
      top: 0;
      background: rgba(0, 0, 0, 0);
    }

    .ant-drawer-header {
      border: 0;
    }

    .ant-drawer-body {
      display: flex;
      align-items: center;
      flex-grow: 0;
      padding: 0;
    }
  }


`


export const Title = styled.div`
  display: flex;

  .play-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    .clear {
      font-size: 12px;
    }
  }

  .lyrics-header {
    flex: 1;
  }
`


export const PlayList = styled.div`
  flex: 1;
 

  .play-item {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 10px;
    

    span {
      flex: 1;
    }

    .name {
      flex: 6;
    }
  }
`