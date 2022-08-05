import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";
import Slider from "react-slick";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 160px;
  background: #011933;

  @media only screen and (max-width: 1536px) {
    padding-top: 130px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 110px;
  }
  @media only screen and (max-width: 1366px) {
    padding-top: 120px;
  }
  @media only screen and (max-width: 1280px) {
    padding-top: 100px;
  }
  @media only screen and (max-width: 820px) {
    padding-top: 80px;
  }
  @media only screen and (max-width: 667px) {
    padding-top: 60px;
  }
`;
export default Section;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto 70px;
  @media only screen and (max-width: 667px) {
    margin-bottom: 30px;
  }
  span {
    color: ${themeGet("colors.secondary")};
    font-family: "Caveat", cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet("colors.secondary")};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: #fff;
    margin-bottom: 22px;
    @media only screen and (max-width: 820px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
`;

export const ReactSlick = styled(Slider)`
  .slick-slide > div {
    margin: 0 12px;
  }

  .main_card {
    border-radius: 0.5rem;
    min-width: 270px;
    max-width: 374px;
    overflow: hidden;
    opacity: 1;
    float: left;
  }
  .grid-x {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    flex-flow: row wrap;
  }
  .cell.auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0px;
    flex: 1 1 0px;
  }
  .grid-x > .small {
    width: 100%;
  }
  .grid-x > .auto,
  .grid-x > .shrink {
    width: auto;
  }
  .flag-PlayerPhoto {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
    z-index: 9999;
    position: absolute;
    margin: 5px;
    border: 2px solid #eba800;
  }
  .main_card__image {
    width: 100%;
    height: 228px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    font-size: 7rem;
    font-weight: 700;
    text-align: center;
    & span {
      background-image: -webkit-linear-gradient(left, #e1c895, #c9a761);
      background-image: -o-linear-gradient(left, #e1c895 0, #c9a761 100%);
      background-image: linear-gradient(90deg, #e1c895, #c9a761);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      float: inherit;
    }
  }
  .main_card__name {
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .main_card__invites {
    background-image: linear-gradient(93deg, #d3a952 7%, #c0994a 92%);
    font-size: 0.8125rem;
    letter-spacing: 4px;
    font-weight: 600;
    padding: 0.15rem;
    text-align: center;
    color: #fff;
  }
  .gold-card-header {
    background: linear-gradient(90deg, #e1c895, #c9a761);
  }
  .main__card__bottom {
    background: #262626;
    & h4 {
      color: #fff;
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 40px;
    li {
      color: #011933;
      + li {
        margin-left: 7px;
        list-style-type: none;
      }
      button {
        background-color: ${rgba("#fff", 0.3)};
        border: 0;
        border-radius: 50px;
        cursor: pointer;
        display: block;
        text-indent: -9999em;
        height: 9px;
        width: 12px;
        transition: all 0.3s ease-in-out 0s;
      }
    }
    .slick-active {
      button {
        background-color: ${themeGet("colors.white")};
        width: 18px;
      }
    }
  }
`;

export const Item = styled.div`
  background-color: #262626;
  border-radius: 15px;
  padding: 40px 35px 45px;
  min-height: 432px;
  display: flex !important;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 30px 25px 35px;
  }
  figure {
    margin: 0 0 35px;
    @media only screen and (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  blockquote {
    font-size: 18px;
    line-height: 1.94;
    margin: 0 0 30px;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  h4 {
    margin-bottom: 12px;
    font-family: Inter, sans-serif;
  }
  p {
    line-height: 19px;
    margin-bottom: 0;
  }
`;

export const AuthorInfo = styled.div`
  margin-top: auto;
`;
