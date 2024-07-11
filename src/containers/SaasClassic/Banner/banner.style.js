import styled, { keyframes } from "styled-components";
import BgIMage from "common/assets/image/main-bg.png";
import MbIMage from "common/assets/image/mobile-bg.png";

const Bubble = keyframes`
  0% {
		box-shadow: 0 0 0 3px rgba(255,65,108,0.3);
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		box-shadow: 0 0 0 100px rgba(255,65,108,0);
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
`;

export const BannerWrapper = styled.section`
  padding: 100px 0 10px 0;
  background-image: url(${BgIMage?.src});
  background-size: cover;
  background-position: top center;
  overflow: hidden;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }
  .title-img {
    display: inline !important;
    width: 500px !important;
    margin-top: 20px !important;
  }
  .prime-cta {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
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
    font-family: inherit;
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
    border: 1px solid #dfa95a;
    z-index: 90;
    width: 150px;
  }
  .prime-cta:hover .tooltiptext {
    visibility: visible;
  }

  .ifram-wd {
    width: 800px;
    height: 400px;
    // border: 4px solid #DFA95A;
  }
  @media only screen and (max-width: 667px) {
    .ifram-wd {
      width: 300px;
      height: 180px;
    }
    background-image: url(${MbIMage?.src});
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .banner-shape {
    z-index: 2;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;

export const VideoModal = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
   
    );
    opacity: 0.2;
    pointer-events: none;
    z-index: 2;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4553;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    svg {
      width: 30px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  &:focus {
    &:after {
      animation: ${Bubble} 0.5s ease-out forwards;
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: calc(100% - 30px);
  width: 900px;
  position: relative;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
