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
import placeholder from "common/assets/image/saasClassic/banner-image.png";
import nTitle from "common/assets/image/saasClassic/title.png";
import { play } from "react-icons-kit/entypo/play";
import { padding } from "styled-system";

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
          {/* <Box {...imageWrapper} style={{ width: "100%", textAlign: "center" }}>
            <Fade bottom>
              <NextImage
                className="cyprus-img"
                src={Coin}
                alt="Triton logo"
                style={{ width: "200px", padding: "15px 0" }}
              />
            </Fade>
          </Box> */}
          <Box className="mt-10">
            {/* <NextImage
              className="cyprus-img"
              src={placeholder}
              alt="Coin Rivet"
              style={{ border: "4px solid rgb(235, 168, 0)" }}
            /> */}

            <iframe
              className="ifram-wd"
              src="https://www.youtube.com/embed/KEboRsH9y6s "
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                marginTop: "30px",
                textAlign: "center",
              }}
            ></iframe>
          </Box>
          <Box
            {...contentWrapper}
            style={{ width: "100%", textAlign: "center" }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#DFA95A",
                fontSize: "28px",
                lineHeight: "30px",
                marginTop: "30px",
                fontWeight: "bold",
              }}
            >
              CASH GAME INVITATIONAL I
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: "16px",
                lineHeight: "30px",
                marginTop: "30px",
                textTransform: "none",
              }}
            >
              Experience the pinnacle of high-stakes poker at Triton Poker
              Series Cash Game Invitational I, where the world's top poker
              strategists converge to showcase their intellectual brilliance and
              strategic expertise. This exclusive event, set in the luxurious
              Maestral Resort & Casino, highlights the sophisticated thinking
              and meticulous planning that defines the game. Enjoy real-time
              expert analysis, interactive live streaming, and exclusive
              masterclass sessions. Join us for an unparalleled celebration of
              poker excellence, where the finest minds compete, strategise, and
              triumph. Don't miss this invitation-only event on our YouTube &
              Twitch channels—mark your calendars now!
            </p>
            <p
              style={{
                textAlign: "center",
                color: "#DFA95A",
                fontSize: "18px",
                lineHeight: "30px",
                marginTop: "30px",
              }}
            >
              AUGUST 04<sup>th</sup> - 10<sup>th</sup>, 2024
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
