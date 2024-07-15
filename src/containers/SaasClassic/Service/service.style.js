import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 50px 0 20px 0;
  background: #000;
  h2 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
}
     h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    color: #DFA95A !important;
  }
  p {
    text-transform: none;
    margin: 0 0 30px;
  }

  .service_item {
    position: relative;
    text-align: center;
    .service_icon {
      width: 110px;
      height: 110px;
      border-radius: 35px;
      background-color: #ffecef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin: 0 auto 28px auto;
      color: #ff4361;
      @media (max-width: 990px) {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }
  }
  .non-mobile {
    display: none;
  }
  .non-desktop {
    display: block;
  }
  h5 {
    color: #000;
  }

  @media (max-width: 550px) {
    .non-desktop {
      display: none;
    }
    h2 {
      font-size: 20px;
      width: 100%;
      line-height: 30px;

  }
    }
    .non-mobile {
      display: block;
    }
    h5 {
      color: #000;
      font-size: 12px;
      text-align: center;
    }
   

  }
`;

export default SectionWrapper;
