import styled, { createGlobalStyle, keyframes } from "styled-components";

const Fade = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;
const FadeUp = keyframes`
  0% {
		opacity: 0;
    transform: scale(.5)
	}
	100% {
		opacity: 1;
    transform: scale(1)
	}
`;

export const GlobalStyle = createGlobalStyle`
  body{
    font-family:"Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family:"Montserrat", sans-serif;
    text-transform: uppercase;
  }

  section {
    position: relative;
    text-transform: uppercase !important;
  }
  sup {
    top: -0.25em !important;
}
  @media only screen and (max-width: 550px) {
    .video-modal {
      max-width: 360px !important;
    }
  }
  h3, h4, h5 {
    font-size: 18px;
  }
  .btn-bg {
    background: linear-gradient(90deg, rgba(180,128,44,1) 0%, rgba(246,208,110,1) 15%, rgba(225,166,52,1) 32%, rgba(239,193,88,1) 42%, rgba(246,208,110,1) 50%, rgba(240,191,84,1) 58%, rgba(225,166,52,1) 68%, rgba(246,208,110,1) 85%, rgba(180,128,44,1) 100%, rgba(246,208,110,1) 7064%); }
  li {
    list-style-type: decimal;
    color: #000;
    font-size: 18px;
    padding-bottom: 3px;
}
.next-arr
{
  position: absolute;
  top:50%;
  width: auto;
  right: -50px;
  cursor:pointer;
}
.prev-arr {
  position: absolute;
        top: 50%;
        width: auto;
        left: -50px;
        cursor:pointer;
}
  @media (max-width: 550px) {
    .next-arr
{

  width: 40px;
  right: -35px;
}
.prev-arr {

        width: 40px;
        left: -35px;
}
    h3, h4 {
      font-size: 18px;
    }
    p {
      font-size: 18px !important;
    }
    p span {
      font-size: 18px !important;
    }
    h2 
    {
      font-size:18px !important;
      font-weight: 800 !important
    }
  li {

      font-size: 18px !important;
  }

  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 18px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #DFA95A;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #DFA95A;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: #DFA95A;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #DFA95A;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  .video-modal{
    background: rgba(0,0,0,0.6) !important;
    border: 0 !important;
    animation: ${Fade} .5s ease-out forwards !important;
    overflow-y: auto;

    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      animation: ${FadeUp} .7s ease-out forwards !important;
    }
  }
  .reuseModalOverlay,
  .modalCloseBtn{
    
    animation: ${Fade} .5s ease-out forwards !important;
  }

  .video-modal{
    background: transparent !important;
    border: 0!important;
    overflow-y: auto;
    .innerRndComponent{
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
  }
  .reuseModalOverlay,
  .reuseModalParentWrapper{
    z-index: 99999!important;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .saas_navbar {
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 2px 0;
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .main_menu {
        li {
          a {
            color: #000;
            &:hover {
              color: #dfa95a;
            }
          }
          &.is-current {
            a {
              color: #dfa95a;
            }
          }
        }
      }
    }
    .hamburgMenu__bar {
      > span {
        background: #dfa95a;
      }
    }
  }

  .saas_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 5px;
        padding-right: 8px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #dfa95a !important;
          }
        }
        a {
          padding: 5px 14px;
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #dfa95a !important;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }
`;
