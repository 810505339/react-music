import styled from 'styled-components'

export const Item = styled.div`
  position: relative;

  .item-name {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight: 700;
    line-height: 18px;
    padding-top: 10px;
    text-align: left;


  }

  .ant-image {
    min-width: 80px;
    min-height: 80px;

    .ant-image-img {
      border-radius: 5px;
    }
  }

  .tag {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;

    .ant-tag {
      margin-right: 0;
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  text-align: center;
`