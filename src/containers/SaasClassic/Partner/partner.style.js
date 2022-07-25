import styled from "styled-components";

const PartnerSectionWrapper = styled.section`
  padding: 100px 0 0;
  background: #011933;

  .marquee-inner span {
    float: left;
    width: 50%;
  }
  .marquee-block {
    --total-marquee-items: 5;
    height: 640px;
    width: calc(390px * (var(--total-marquee-items)));
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin: 20px auto 0;
    padding: 30px 0 0;
  }
  .marquee-inner {
    display: block;
    width: 200%;
    position: absolute;
  }

  .marquee-inner.to-left {
    animation: marqueeLeft 25s linear infinite;
  }
  .main_card {
    border-radius: 0.5rem;
    min-width: 270px;
    max-width: 374px;
    overflow: hidden;
    margin-left: 1rem !important;
    opacity: 1;
    float: left;
  }
  @keyframes marqueeLeft {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
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
  .main_card__image {
    background: #fff;
    width: 176px;
    height: 176px;
    border-radius: 40rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
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
    margin-bottom: 0;
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
    padding: 2.5rem 1.5rem 1.5rem;
  }
  .main__card__bottom {
    background: #262626;
    padding: 2.5rem 1.5rem 1.5rem;
    & h4 {
      color: #fff;
    }
  }

  @media (max-width: 1440px) {
    .main_card {
      max-width: 274px;
    }
    .marquee-block {
      width: calc(290px * (var(--total-marquee-items)));
    }
  }

  @media (max-width: 990px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 0;
  }
`;

export default PartnerSectionWrapper;
