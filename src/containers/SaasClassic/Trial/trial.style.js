import styled from "styled-components";

const SectionWrapper = styled.section`
  background: #011933;
  padding: 100px 0 0 0;
  .vender-logos {
    width: 33%;
    float: left;
    text-align: center;
    margin-bottom: 30px;
  }
  .line-2 {
    margin-left: 15%;
  }
  .justify-cen {
  }
  @media (max-width: 550px) {
    padding: 20px 0 0 0;
    .vender-logos {
      width: 50%;
      float: left;
      text-align: center;
      margin-bottom: 10px;
      padding: 10px;
      height: 200px;
    }
    .line-2 {
      margin-left: 0px;
    }
  }
`;

export default SectionWrapper;
