import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { openModal, closeModal } from "@redq/reuse-modal";
import Box from "common/components/Box";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import { BannerWrapper, VideoWrapper } from "./banner.style";
import Coin from "common/assets/image/saasClassic/logo3.png";
import placeholder from "common/assets/image/saasClassic/video.jpg";
import nTitle from "common/assets/image/saasClassic/title.png";
import { play } from "react-icons-kit/entypo/play";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/jjR_xwUZedI"
      frameBorder="0"
    />
  </VideoWrapper>
);

const BannerSection = ({ row, contentWrapper, title, imageWrapper }) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box {...row}>
          <Box {...imageWrapper} style={{ width: "100%", textAlign: "center" }}>
            <Fade bottom>
              <NextImage
                className="cyprus-img"
                src={Coin}
                alt="Triton logo"
                style={{ width: "200px" }}
              />
            </Fade>
          </Box>
          <Box>
            <NextImage
              className="cyprus-img"
              src={placeholder}
              alt="Coin Rivet"
              style={{ border: "4px solid rgb(235, 168, 0)" }}
            />

            {/* <iframe
              className="ifram-wd"
              src="https://www.youtube.com/embed/lb--zQ8tXHs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                marginTop: "30px",
                textAlign: "center",
              }}
            ></iframe> */}
          </Box>
          <Box
            {...contentWrapper}
            style={{ width: "100%", textAlign: "center" }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#EBA800",
                fontSize: "28px",
                lineHeight: "30px",
                marginTop: "30px",
                fontWeight: "bold",
              }}
            >
              Cash Game Invitational 1
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                marginTop: "30px",
              }}
            >
              The Special Triton Invitational is a unique $200,000 NLH buy-in
              that features high-net-worth individuals and poker professionals
              battling for prize money and the coveted title & trophy. This
              unique format was inspired by the record breaking Triton Million
              that took place in London in 2019 where affluent individuals and
              poker pros play the first 8 levels separately, then converge to
              battle against each other to a winner. This exclusive event will
              start on kick-off at the Triton Poker SHRS in Monte-Carlo on the
              24th of October, 2023 at the luxurious Monte-Carlo Sporting -
              Salle Des Étoiles and conclude October 26th, 2023.
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                marginTop: "30px",
              }}
            >
              Maestral Resort & Casino <br />
              AUGUST 07<sup>th</sup> - 10<sup>th</sup>, 2024
            </p>
            {/* <div className="prime-cta">
              <div className="primary-cta" style={{ marginTop: "5px" }}>
                VIEW FULL STRUCTURE
              </div>
              <span class="tooltiptext">Coming Soon</span>
            </div> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: ["100%", "100%", "80%", "55%", "50%"],
    mb: "40px",
  },
  title: {
    fontSize: ["24px", "32px", "40px", "42px", "46px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.2",
    textAlign: "center",
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#fff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#fff",
    mb: 0,
    as: "span",
  },
  fillButton: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    colors: "secondaryWithBg",
    height: "46px",
    minWidth: ["auto", "150px"],
    height: ["40px", "46px"],
    minHeight: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "35px",
  },
  button: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "700",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    color: "#fff",
    colors: "secondary",
    height: ["40px", "46px"],
    minHeight: "auto",
  },
};

export default BannerSection;
