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
import image4 from "common/assets/image/player4.jpeg";

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
        slidesToShow: 1,
        slidesToScroll: 1,
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
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image1}
                    alt="Rob Yong"
                  />
                </div>
                <h4 className="main_card__name">Rob Yong</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Doug Polk</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image2}
                    alt="Doug Polk"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/vn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image3}
                    alt="Dao Minh Phu"
                  />
                </div>
                <h4 className="main_card__name">Dao Minh Phu</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Michael Soyza</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image4}
                    alt="Michael Soyza"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/in.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image5}
                    alt="Santhosh Suvarna"
                  />
                </div>
                <h4 className="main_card__name">Santhosh Suvarna</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Seth Davies </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image6}
                    alt="Seth Davies "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image7}
                    alt="Seth Gottlieb"
                  />
                </div>
                <h4 className="main_card__name">Seth Gottlieb</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Nick Petrangelo </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image8}
                    alt="Nick Petrangelo "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image9}
                    alt="Andrew Pantling"
                  />
                </div>
                <h4 className="main_card__name">Andrew Pantling</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Sam Greenwood </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image10}
                    alt="Sam Greenwood  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image11}
                    alt="Scott Ball "
                  />
                </div>
                <h4 className="main_card__name">Scott Ball </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Chris Brewer</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image12}
                    alt="Chris Brewer "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
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
                    src={image13}
                    alt="Jean-Noel Thorel "
                  />
                </div>
                <h4 className="main_card__name">Jean-Noel Thorel </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Erik Seidel </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image14}
                    alt="Erik Seidel  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
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
                    src={image15}
                    alt="Elton Tsang"
                  />
                </div>
                <h4 className="main_card__name">Elton Tsang</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Pedro Garagnani </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image16}
                    alt="Pedro Garagnani   "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

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
                    src={image17}
                    alt="Wai Kin Yong "
                  />
                </div>
                <h4 className="main_card__name">Wai Kin Yong </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Linus Loeliger </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ch.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image18}
                    alt="Linus Loeliger   "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/id.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image19}
                    alt="FERDINAND PUTRA"
                  />
                </div>
                <h4 className="main_card__name">FERDINAND PUTRA</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">TIMOTHY ADAMS</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image20}
                    alt="TIMOTHY ADAMS  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

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
                    src={image21}
                    alt="Anson Ewe"
                  />
                </div>
                <h4 className="main_card__name">Anson Ewe</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Kiat Lee</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image22}
                    alt="Kiat Lee  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
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
                    src={image23}
                    alt="Karl Chappe-Gatien"
                  />
                </div>
                <h4 className="main_card__name">Karl Chappe-Gatien</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Danny Tang</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image24}
                    alt="Danny Tang  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

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
                    src={image25}
                    alt="Paul Phua"
                  />
                </div>
                <h4 className="main_card__name">Paul Phua</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Phil Ivey</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image26}
                    alt="Phil Ivey  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image27}
                    alt="Alfred Decarolis "
                  />
                </div>
                <h4 className="main_card__name">Alfred Decarolis </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Andrew Robl</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image28}
                    alt="Andrew Robl  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image29}
                    alt="PHIL NAGY "
                  />
                </div>
                <h4 className="main_card__name">PHIL NAGY </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">TOM DWAN</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image30}
                    alt="TOM DWAN  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image31}
                    alt="Ernildo Santos"
                  />
                </div>
                <h4 className="main_card__name">Ernildo Santos</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Yuri Dzivielevski</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image32}
                    alt="Yuri Dzivielevski  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
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
                    src={image33}
                    alt="Winfred Yu"
                  />
                </div>
                <h4 className="main_card__name">Winfred Yu</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Steve O'Dwyer</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ie.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image34}
                    alt="Steve O'Dwyer  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

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
                    src={image35}
                    alt="Richard Yong"
                  />
                </div>
                <h4 className="main_card__name">Richard Yong</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Dan Cates</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image36}
                    alt="Dan Cates  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image37}
                    alt="Morten Klein"
                  />
                </div>
                <h4 className="main_card__name">Morten Klein</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Espen Jorstad</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image38}
                    alt=" Espen Jorstad  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/nz.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image39}
                    alt="SOSIA JIANG"
                  />
                </div>
                <h4 className="main_card__name">SOSIA JIANG</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> JASON KOON</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image40}
                    alt=" JASON KOON  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

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
                    src={image41}
                    alt="Webster Lim"
                  />
                </div>
                <h4 className="main_card__name">Webster Lim</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Christoph Vogelsang</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image42}
                    alt=" Christoph Vogelsang  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
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
                    src={image43}
                    alt="PHILIP STERNHEIMER"
                  />
                </div>
                <h4 className="main_card__name">PHILIP STERNHEIMER</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Fedor Holz</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image44}
                    alt=" Fedor Holz  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name"> Felipe Ramos </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt=" Felipe Ramos "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name"> Michael Soyza </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt=" Michael Soyza "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Tom Vogelsang </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Tom Vogelsang "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Barak Wisbrod </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/is.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Barak Wisbrod "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Henrik Hecklen</h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/dk.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Henrik Hecklen"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Ben Tollerene</h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Ben Tollerene"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Luuk Gieles</h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/nl.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Luuk Gieles"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Yuri Dzivielevski </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Yuri Dzivielevski "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Viacheslav Buldygin </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Viacheslav Buldygin "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Viktor Kudinov </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Viktor Kudinov "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">VIP</div>
              <div className="cell small gold-card-header">
                {/* <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                /> */}
                <div className="main_card__image pd-6">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Paul Phua"
                  />
                </div>
                {/* <h4 className="main_card__name">Paul Phua</h4> */}
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                {/* <h4 className="main_card__name">Kahle Burns </h4> */}
                <div className="main_card__image pd-6">
                  {/* <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                    alt="player"
                  /> */}
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Kahle Burns "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>
        </ReactSlick>
        {/* <div className="px-3 pt-14 text-center hidden md:block">
          <Link href="https://click.triton-series.com/CRI-Giveaway">
            <a target="_blank">
              <NextImage
                className="cyprus-img"
                src={giveaway}
                alt="CRI Giveaway"
              />
            </a>
          </Link>
        </div>

        <div className="px-3 pt-14 text-center block md:hidden">
          <Link href="https://click.triton-series.com/CRI-Giveaway">
            <a target="_blank">
              <NextImage
                className="cyprus-img"
                src={giveawayMobile}
                alt="CRI Giveaway"
              />
            </a>
          </Link>
        </div> */}
      </Container>
    </Section>
  );
};

export default Testimonials;
