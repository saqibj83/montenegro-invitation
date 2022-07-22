import React from "react";
import { openModal, closeModal } from "@redq/reuse-modal";
import Container from "common/components/UI/Container";
import Text from "common/components/Text";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import Image from "common/components/Image";
import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from "./banner.style";
import playIcon from "common/assets/image/saasAppDark/icons/play.svg";
import dashboard from "common/assets/image/saasAppDark/banner-dashboard.png";

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
  <p style={{ color: "#fff" }}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eligendi,
    minus, harum, in molestias eaque voluptatem delectus maiores consequuntur a
    tempora. Tenetur animi aspernatur odio omnis, sint unde minus. Iusto.
  </p>
);

const ModalContent1 = () => (
  <Container width="1300px">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          General
        </h3>
      </div>

      <div className="p-6 space-y-6">
        <ul>
          <li>
            Players are required to play from the very beginning of the
            tournament
          </li>
          <li>
            Tournament will play 8-handed – the final table will be 9-handed
          </li>
          <li>Single (1) Re-Entry available during the Registration Period</li>
          <li>
            If a player wishes to Re-Enter he/she will have 30 Mins to do so
            after getting eliminated{" "}
          </li>
          <li>
            Registration will end at the start of Level 11 (Day 2 - 02:55 PM)
          </li>
          <li>Day 2 will play down to the Final Table</li>
        </ul>
      </div>
    </div>
  </Container>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
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

  const handleVideoModal1 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent1,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <Section id="home">
      <Container width="1300px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              The leading Customer <span>dashboard</span> for your daily
              workspace
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
            <Buttons>
              <button className="button-two" onClick={handleVideoModal1}>
                {" "}
                New Model
              </button>
              <Button
                colors="primary"
                title="Get Free Trial"
                className="button-one"
              />
              <button className="button-two" onClick={handleVideoModal}>
                <span className="play-icon">
                  <img src={playIcon?.src} alt="play Icon" />
                </span>
                <span className="btn-txt">
                  <span className="primary">Explore</span> Intro Video
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
