import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.div`
  padding: 100px 0;
  overflow: hidden;

  @media only screen and (max-width: 1440px) {
    padding: 100px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 60px 0 5px;
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
  .bg-event {
    background: url(https://cdn.triton-series.com/wp-content/uploads/2019/12/12113534/bg-event.jpg) !important;
  }

  h2 {
    color: ${themeGet("colors.white", "#fff")};
    font-size: 36px;
    line-height: 44px;
    font-weight: 700;
    margin-bottom: 27px;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 20px;
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
        background-color: #dfa95a;
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
        background-color: #dfa95a;
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
        background-color: #dfa95a;
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
        background-color: #dfa95a;
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
            font-family: "gill-sans-nova", sans-serif !important;
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
          font-family: "gill-sans-nova", sans-serif !important;
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
        font-family: "Roboto";
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
