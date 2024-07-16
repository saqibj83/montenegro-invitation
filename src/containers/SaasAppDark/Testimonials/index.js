import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Section, { ReactSlick, SectionHeading } from "./testimonials.style";
import Link from "next/link";
import prevArr from "common/assets/image/left-arrow.svg";
import nextArr from "common/assets/image/right-arrow.svg";

import giveaway from "common/assets/image/giveaway-banner.png";
import giveawayMobile from "common/assets/image/mobile-banner.png";

import image1 from "common/assets/image/player1.jpeg";
import image2 from "common/assets/image/player2.jpeg";

import image3 from "common/assets/image/player3.jpeg";
import image4 from "common/assets/image/IMG_2344.png";

import image5 from "common/assets/image/player5.jpeg";
import image6 from "common/assets/image/player6.jpeg";

import image7 from "common/assets/image/player7.jpeg";
import image8 from "common/assets/image/player8.jpeg";

import image9 from "common/assets/image/player9.jpeg";
import image10 from "common/assets/image/player10.jpeg";

import image11 from "common/assets/image/player11.jpeg";
import image12 from "common/assets/image/player12.jpeg";

import image13 from "common/assets/image/player13.jpeg";
import image14 from "common/assets/image/player14.jpeg";

import imageDef from "common/assets/image/default.png";

import image15 from "common/assets/image/player15.jpg";
import image16 from "common/assets/image/player16.jpg";

import image17 from "common/assets/image/player17.jpg";
import image18 from "common/assets/image/player18.jpg";

import image19 from "common/assets/image/player19.jpg";
import image20 from "common/assets/image/player20.jpg";

import image21 from "common/assets/image/player21.jpg";
import image22 from "common/assets/image/player22.jpg";

import image23 from "common/assets/image/player23.jpg";
import image24 from "common/assets/image/player24.jpg";

import image25 from "common/assets/image/player25.jpg";
import image26 from "common/assets/image/player26.jpg";

import image27 from "common/assets/image/player27.jpg";
import image28 from "common/assets/image/player28.jpg";

import image29 from "common/assets/image/player29.jpg";
import image30 from "common/assets/image/player30.jpg";

import image31 from "common/assets/image/player31.jpg";
import image32 from "common/assets/image/player32.jpg";

import image33 from "common/assets/image/player33.jpg";
import image34 from "common/assets/image/player34.jpg";

import image35 from "common/assets/image/player35.jpg";
import image36 from "common/assets/image/player36.jpg";

import image37 from "common/assets/image/player37.jpg";
import image38 from "common/assets/image/player38.jpg";

import image39 from "common/assets/image/player39.jpg";
import image40 from "common/assets/image/player40.jpg";

import image41 from "common/assets/image/player41.jpg";
import image42 from "common/assets/image/player42.jpg";

import image43 from "common/assets/image/player43.jpg";
import image44 from "common/assets/image/player44.jpg";

import image45 from "common/assets/image/player45.jpg";
import image46 from "common/assets/image/player46.jpg";

import image47 from "common/assets/image/player47.jpg";
import image48 from "common/assets/image/player48.jpg";

import image49 from "common/assets/image/player49.jpg";
import image50 from "common/assets/image/player50.jpg";

import image51 from "common/assets/image/player51.jpg";
import image52 from "common/assets/image/player52.jpg";

import image53 from "common/assets/image/player53.jpg";
import image54 from "common/assets/image/player54.jpg";

import image55 from "common/assets/image/player55.jpg";
import image56 from "common/assets/image/player56.jpg";

import image57 from "common/assets/image/player57.jpg";
import image58 from "common/assets/image/player58.jpg";

import image61 from "common/assets/image/player61.jpg";
import image62 from "common/assets/image/player62.jpg";

import image63 from "common/assets/image/player63.jpg";
import image64 from "common/assets/image/player64.jpg";

import image65 from "common/assets/image/player65.jpg";
import image66 from "common/assets/image/player66.jpg";

import image67 from "common/assets/image/player67.jpg";
import image68 from "common/assets/image/player68.jpg";

import image71 from "common/assets/image/player71.jpg";
import image72 from "common/assets/image/player72.jpg";

import image073 from "common/assets/image/player073.jpg";
import image074 from "common/assets/image/player074.jpg";

import image73 from "common/assets/image/player73.jpg";
import image74 from "common/assets/image/player74.jpg";

import image75 from "common/assets/image/player75.jpg";
import image76 from "common/assets/image/player76.jpg";

import image77 from "common/assets/image/player77.jpg";
import image78 from "common/assets/image/player78.jpg";

import image79 from "common/assets/image/player79.jpg";
import image80 from "common/assets/image/player80.jpg";

import image81 from "common/assets/image/player81.jpg";
import image82 from "common/assets/image/player82.jpg";

import image83 from "common/assets/image/player83.jpg";
import image84 from "common/assets/image/player84.jpg";

import image85 from "common/assets/image/player85.jpg";
import image86 from "common/assets/image/player86.jpg";

import image87 from "common/assets/image/player87.jpg";
import image88 from "common/assets/image/player88.jpg";

import image89 from "common/assets/image/player89.jpg";
import image90 from "common/assets/image/player90.jpg";

import image91 from "common/assets/image/player91.jpg";
import image92 from "common/assets/image/player92.jpg";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="next-arr"
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <NextImage className="cyprus-img" src={nextArr} alt="Next Arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prev-arr"
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <NextImage className="cyprus-img" src={prevArr} alt="Previous Arrow" />
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Section id="participants_section">
      <Container width="1300px">
        <SectionHeading>
          <Heading content="PARTICIPANTS" />
        </SectionHeading>
        <ReactSlick {...settings}>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image27}
                    alt="PAUL PHUA "
                  />
                </div>
                <h4 className="main_card__name">PAUL PHUA </h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image9}
                    alt="ROB YONG"
                  />
                </div>
                <h4 className="main_card__name">ROB YONG</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image31}
                    alt="ELTON TSANG"
                  />
                </div>
                <h4 className="main_card__name">ELTON TSANG</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/lt.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image53}
                    alt="TONY G"
                  />
                </div>
                <h4 className="main_card__name">Tony G </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image6}
                    alt="Rui Cao   "
                  />
                </div>
                <h4 className="main_card__name">Rui Cao </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image3}
                    alt="Tan Xuan"
                  />
                </div>
                <h4 className="main_card__name">Tan Xuan</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image7}
                    alt="ST Wang  "
                  />
                </div>
                <h4 className="main_card__name">ST Wang </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image8}
                    alt="Andy Ni "
                  />
                </div>
                <h4 className="main_card__name">Andy Ni </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Mikhail Petrov "
                  />
                </div>
                <h4 className="main_card__name">Mikhail Petrov </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image10}
                    alt="Joe Zou"
                  />
                </div>
                <h4 className="main_card__name">Joe Zou</h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image11}
                    alt="Aaron Zang "
                  />
                </div>
                <h4 className="main_card__name">Aaron Zang </h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image28}
                    alt="PHIL IVEY  "
                  />
                </div>
                <h4 className="main_card__name">PHIL IVEY </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fi.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image18}
                    alt="PATRIK ANTONIUS   "
                  />
                </div>
                <h4 className="main_card__name">PATRIK ANTONIUS </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image12}
                    alt="Daniel Cates"
                  />
                </div>
                <h4 className="main_card__name">Daniel Cates</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image16}
                    alt="ADRIAN MATEOS  "
                  />
                </div>
                <h4 className="main_card__name">ADRIAN MATEOS </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ch.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image2}
                    alt="Linus Loeliger   "
                  />
                </div>
                <h4 className="main_card__name">Linus Loeliger </h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/pl.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image5}
                    alt="Wiktor Malinowski"
                  />
                </div>
                <h4 className="main_card__name">Wiktor Malinowski</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">PRO PLAYER</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image20}
                    alt="BRIAN KIM  "
                  />
                </div>
                <h4 className="main_card__name">BRIAN KIM </h4>
              </div>
            </div>
          </div>
        </ReactSlick>
      </Container>

      <Container width="1300px" className="mt-8"></Container>
    </Section>
  );
};

export default Testimonials;
