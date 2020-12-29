import styled from 'styled-components'


export const List = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 25px;
`

export const Item = styled.div`

  .ant-image-img {
    min-width: 60px;
    min-height: 60px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
  }


  .name {
    margin-top: 5px;
    color: #000;
    font-size: 16px;
  }

`