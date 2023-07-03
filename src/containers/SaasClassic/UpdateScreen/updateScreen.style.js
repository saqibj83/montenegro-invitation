import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 100px 0 50px 0;
  background: #000;
  .rc-tabs-content-holder {
    background: #ffff;
    border-radius: 0px 0px 10px 10px;
    border: 3px solid #eba800;
  }
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }

  .rc-tabs-tabpane h2 {
    color: #212121;
    padding: 20px 40px 0;
    font-size: 18px;
  }
  .rc-tabs-tab-btn {
    font-weight: bold;
    font-size: 18px;
  }
  .rc-tabs-tabpane h3 {
    color: #212121;
    padding: 10px 0 0 40px;
  }
  .rc-tabs-tabpane p {
    color: #212121;
    padding: 0 40px;
    line-height: 20px;
    font-size: 18px;
    text-transform: none;
  }
  .primary-cta {
    text-decoration: none;
    color: #000;
    margin: -40px 20px 20px;
    font-size: 18px;
    text-transform: uppercase;
    padding: 15px 40px 15px;
    background: linear-gradient(
      90deg,
      rgb(245, 191, 64),
      rgb(255, 225, 156) 50%,
      rgb(245, 191, 64) 100%,
      rgb(245, 191, 64) 0px
    );
    box-shadow: #000 3px 3px 6px 0;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
  }
  .prime-cta {
    text-align: center;
    margin-bottom: 30px;
  }
  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }

  li {
    list-style: none;
    position: relative;
    padding: 10px 0 0 20px;
    color: #212121;
    font-size: 18px;
    text-transform: none;
    line-height: 20px;
  }
  li a {
    color: #eba800 !important;
    text-decoration: underline;
  }
  .update-screen-tab {
    border: 0;
    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container,
    .rc-tabs-nav-wrap {
      margin-bottom: 0;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      @media (max-width: 767px) {
        margin-bottom: 0;
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        // height: 1px;
        // background: #e7e8eb;
        display: block;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll,
        .rc-tabs-nav-list {
          width: 100%;
          text-align: center;
          justify-content: center;
          @media (max-width: 767px) {
            flex-wrap: wrap;
          }
          .rc-tabs-nav {
            float: none;
            display: block;

            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 18px;
        color: #eba800;
        font-weight: 400;
        min-width: 230px;
        padding: 10px 0 10px 0;
        text-align: center;
        background: transparent !important;
        transition: 0.25s ease-in-out;
        display: inline-block;
        border: 1px solid #eba800;
        float: none;
        &:hover {
          color: #fff;
        }
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:after {
          background: #eba800;
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
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
          ) !important;

          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }
        }
        > div {
          margin-right: 8px;
          i {
            margin-right: 5px;
            @media (max-width: 767px) {
              margin-right: 7px;
            }
          }
        }
        @media (max-width: 1199px) {
          font-size: 16px;
          padding: 0 0 20px 0;
          min-width: 170px;
        }
        @media (max-width: 990px) {
          min-width: auto;
          padding: 0 20px 15px 20px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          max-width: 50%;
          svg {
            width: 20px;
          }
        }
      }
      &::before {
        border: 0;
      }
    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        overflow: hidden;
        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
    .container {
      padding: 10px;
    }
    .primary-cta {
      margin: 20px 20px 20px !important;
      font-size: 14px !important;
      padding: 10px 15px !important;
    }
    .rc-tabs-tab-btn {
      font-weight: bold;
      font-size: 11px;
    }
    .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab {
      min-width: auto;
      padding: 0 7px;
    }
  }
  .rc-tabs-nav-operations {
    display: none;
  }
  .update-screen-tab .rc-tabs-nav-wrap .rc-tabs-tab > div {
    margin-right: 0;
  }
`;

export default SectionWrapper;
