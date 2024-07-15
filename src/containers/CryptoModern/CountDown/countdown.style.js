import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.div`
  padding:60px 0 0;
  overflow: hidden;
  @media only screen and (max-width: 550px) {
    padding: 60px 0 0;
    .video-modal {
      max-width: 360px !important;
    }
      h1 {
      text-align:center
      }
   
  }
  .prime-cta {
    text-align: center;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    justify-content: center;
    color: #000;
    background: linear-gradient(
      90deg,
      rgba(180, 128, 44, 1) 0%,
      rgba(246, 208, 110, 1) 15%,
      rgba(225, 166, 52, 1) 32%,
      rgba(239, 193, 88, 1) 42%,
      rgba(246, 208, 110, 1) 50%,
      rgba(240, 191, 84, 1) 58%,
      rgba(225, 166, 52, 1) 68%,
      rgba(246, 208, 110, 1) 85%,
      rgba(180, 128, 44, 1) 100%,
      rgba(246, 208, 110, 1) 7064%
    );
    min-height: 46px;
    min-width: 48px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    text-transform: capitalize;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
    border: 0;
    transition: all 0.3s ease;
  }
  .prime-cta .tooltiptext {
    visibility: hidden;
    background-color: #000000;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    margin-top: -45px;
    padding: 4px;
    border: 1px solid #DFA95A;
    z-index: 90;
    width: 150px;
  }
  .prime-cta:hover .tooltiptext {
    visibility: visible;
  }
  h1 {
    color: ${themeGet("colors.white", "#fff")};
    font-size: 1.5rem;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h3 {
    color: #000;
    font-size: 36px;
    line-height: 30px;
    font-weight: 700;
    & span {
      font-size: 16px;
    }
  }
  h2 {
    color: ${themeGet("colors.white", "#fff")};
    font-size: 36px;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 27px;
    text-align:center;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 20px;
    }

`;
export const ContentTable = styled.div`
  @media only screen and (max-width: 550px) {
    table {
      margin-top: 10px !important;
    }
    .main-box {
      width: 360px;
      & th,
      td {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 480px) {
    flex-wrap: nowrap;
    align-items: center;
  }

 
    @media only screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
    }
  }
  button {
    margin: 10px;
  }
  .btn {
    font-size: 13px;
    -webkit-border-radius: $border-radius;
    -moz-border-radius: $border-radius;
    border-radius: $border-radius;
    font-weight: 600;
    padding: 16px 22px;
    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease 0s;
    top: 0;
    width: 300px;
    border-radius: 20px;
    &:hover {
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
        0 3px 6px rgba(0, 0, 0, 0.08);
      top: -5px;
    }
    span {
      font-size: 18px;
      margin-left: 15px;
      vertical-align: middle;
    }
    i {
      font-size: 18px;
      vertical-align: middle;
    }
    &.btn-facebook {
      background-color: #1e73be;
      color: #fff;
      &:active {
        background-color: #1e73be;
      }
      &:hover {
        box-shadow: none;
        background-color: #DFA95A;
        top: 0;
      }
    }

    &.btn-youtube {
      background-color: #dd3333;
      color: #fff;
      &:active {
        background-color: #dd3333;
      }
      &:hover {
        box-shadow: none;
        background-color: #DFA95A;
        top: 0;
      }
    }
    &.btn-twitch {
      background-color: #8224e3;
      color: #fff;
      &:active {
        background-color: #8224e3;
      }
      &:hover {
        box-shadow: none;
        background-color: #DFA95A;
        top: 0;
      }
    }
  }

  .timerCount {
    margin-top: 30px;
    margin-bottom: 60px;

    .NormalClock {
      display: flex;
      justify-content: space-between;
      width: 600px;
      align-items: center;
      @media (max-width: 480px) {
        width: 100%;
      }
      .NormalUnitContainer {
        width: 110px;
        height: 100px;
        border-radius: 5px;
        background-color: #DFA95A;
        @media (max-width: 480px) {
          width: 70px;
          height: 70px;
          background-color: transparent;
        }
        .NormalupperCard {
          align-items: center;
          display: flex;
          justify-content: center;
          span {
            font-size: 60px;
            letter-spacing: -1px;
            color: #ffffff;
            font-weight: 300;
            text-align: center;
            @media (max-width: 480px) {
              font-size: 30px;
            }
          }
        }
        .digitLabel {
          font-size: 18px;
          letter-spacing: 3px;
          color: #fff;
          font-weight: 500;
          text-align: center;
          margin-top: 12px;
          @media (max-width: 480px) {
            font-size: 10px;
          }
        }
      }
      .dividerColon {
        font-size: 36px;
        line-height: 48px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        @media (max-width: 480px) {
          display: none;
        }
      }
    }
  }
  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 30px;

    &.primary {
      background-image: linear-gradient(to right, #4ba1d8, #4464bd 95%);
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 9px 20px -10px;
      }
    }
  }
`;

export default SectionWrapper;
