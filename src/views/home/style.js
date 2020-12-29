import styled from 'styled-components'


export const BannerItem = styled.div`
  background-image: url(${props => props.url});
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center center;
  background-size: 6000px;

  img {
    width: 1380px;
  }
`
export const Title = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
  }



`
export const Container = styled.div`
  max-width: 1380px;
  margin: 0 auto;
`
