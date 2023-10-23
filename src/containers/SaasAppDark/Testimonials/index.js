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
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image1}
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
                    src={image2}
                    alt="Danny Tang"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image3}
                    alt="Mikalai Vaskaboinikau"
                  />
                </div>
                <h4 className="main_card__name">Mikalai Vaskaboinikau</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Wiktor Malinowski </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/pl.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image4}
                    alt="Wiktor Malinowski "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image5}
                    alt="PHIL NAGY"
                  />
                </div>
                <h4 className="main_card__name">PHIL NAGY</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> NACHO BARBERO</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ar.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image6}
                    alt=" NACHO BARBERO"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          {/* <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
                    alt="SETH GOTTLIEB "
                  />
                </div>
                <h4 className="main_card__name">SETH GOTTLIEB </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">SAM GREENWOOD </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image8}
                    alt="SAM GREENWOOD "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">JASON KOON </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image10}
                    alt="JASON KOON  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
                    alt="KEITH LEHR  "
                  />
                </div>
                <h4 className="main_card__name">KEITH LEHR </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NICK PETRANGELO</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image12}
                    alt="NICK PETRANGELO "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          {/* <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image13}
                    alt="CARY KATZ "
                  />
                </div>
                <h4 className="main_card__name">CARY KATZ </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">BRYN KENNEY </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image14}
                    alt="BRYN KENNEY  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/tn.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image15}
                    alt="MAHER NOUIRA"
                  />
                </div>
                <h4 className="main_card__name">MAHER NOUIRA</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">ADRIAN MATEOS</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image16}
                    alt="ADRIAN MATEOS  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image17}
                    alt="Eddie Tran "
                  />
                </div>
                <h4 className="main_card__name">Eddie Tran </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">PATRIK ANTONIUS </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/fi.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image18}
                    alt="PATRIK ANTONIUS   "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image19}
                    alt="SETH GOTTLIEB"
                  />
                </div>
                <h4 className="main_card__name">SETH GOTTLIEB</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">BRIAN KIM</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image20}
                    alt="BRIAN KIM  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image21}
                    alt="ANDREW PANTLING"
                  />
                </div>
                <h4 className="main_card__name">ANDREW PANTLING</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">SAM GREENWOOD</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image22}
                    alt="SAM GREENWOOD  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/az.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image23}
                    alt="RAMIN HAJIYEV"
                  />
                </div>
                <h4 className="main_card__name">RAMIN HAJIYEV</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">MIKITA BADZIAKOUSKI</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image24}
                    alt="MIKITA BADZIAKOUSKI  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image25}
                    alt="KENT STAAHLE"
                  />
                </div>
                <h4 className="main_card__name">KENT STAAHLE</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">ESPEN JORSTAD</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image26}
                    alt="eSPEN JORSTAD  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">PHIL IVEY</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image28}
                    alt="PHIL IVEY  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/id.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image29}
                    alt="FERDINAND PUTRA "
                  />
                </div>
                <h4 className="main_card__name">FERDINAND PUTRA </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> STEPHEN CHIDWICK</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image30}
                    alt=" STEPHEN CHIDWICK  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">PEDRO GARAGNANI</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image32}
                    alt="PEDRO GARAGNANI  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image33}
                    alt="LUN LOON"
                  />
                </div>
                <h4 className="main_card__name">LUN LOON</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">KIAT LEE</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image34}
                    alt="KIAT LEE  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image35}
                    alt="JEAN-NOEL THOREL"
                  />
                </div>
                <h4 className="main_card__name">JEAN-NOEL THOREL</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">ERIK SEIDEL</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image36}
                    alt="ERIK SEIDEL  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          {/* <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image37}
                    alt="WAI KIN YONG"
                  />
                </div>
                <h4 className="main_card__name">WAI KIN YONG</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> MICHAEL SOYZA</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image38}
                    alt=" MICHAEL SOYZA  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image39}
                    alt="WEBSTER LIM"
                  />
                </div>
                <h4 className="main_card__name">WEBSTER LIM</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> MICHAEL ADDAMO</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image40}
                    alt=" MICHAEL ADDAMO  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image41}
                    alt="ALEXANDER SHELUKHIN"
                  />
                </div>
                <h4 className="main_card__name">ALEXANDER SHELUKHIN</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> MARIO MOSBOCK</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image42}
                    alt=" MARIO MOSBOCK  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image43}
                    alt="BOB VOULGARIS"
                  />
                </div>
                <h4 className="main_card__name">BOB VOULGARIS</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> TIMOTHY ADAMS</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image44}
                    alt=" TIMOTHY ADAMS  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image45}
                    alt="RICHARD YONG"
                  />
                </div>
                <h4 className="main_card__name">RICHARD YONG</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> ISAAC HAXTON</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image46}
                    alt=" ISAAC HAXTON  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/dk.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image47}
                    alt="THEIS VAD HENNEBJERRE"
                  />
                </div>
                <h4 className="main_card__name">THEIS VAD HENNEBJERRE</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> DAN SMITH</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image48}
                    alt=" DAN SMITH  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image49}
                    alt="DERRIC HAYNIE"
                  />
                </div>
                <h4 className="main_card__name">DERRIC HAYNIE</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> CHRIS BREWER</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image50}
                    alt=" CHRIS BREWER  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image51}
                    alt="DAVID NICHOLSON"
                  />
                </div>
                <h4 className="main_card__name">DAVID NICHOLSON</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> SAM GRAFTON</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image52}
                    alt=" SAM GRAFTON  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>
          {/*
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image53}
                    alt="Lun Loon"
                  />
                </div>
                <h4 className="main_card__name">Lun Loon</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Michael Soyza</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image54}
                    alt=" Michael Soyza  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/az.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image55}
                    alt="Ramin Hajiyev"
                  />
                </div>
                <h4 className="main_card__name">Ramin Hajiyev</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Mikita Badziakouski</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image56}
                    alt=" Mikita Badziakouski  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          {/* <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image57}
                    alt="Talal Shakerchi "
                  />
                </div>
                <h4 className="main_card__name">Talal Shakerchi </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Ben Heath</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image58}
                    alt=" Ben Heath  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image61}
                    alt="KANNAPONG THANARATTRAKUL "
                  />
                </div>
                <h4 className="main_card__name">KANNAPONG THANARATTRAKUL </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> PUNNAT PUNSRI</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image62}
                    alt=" PUNNAT PUNSRI  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image63}
                    alt="DAVID MALKA "
                  />
                </div>
                <h4 className="main_card__name">DAVID MALKA </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> BRIAN KIM</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image64}
                    alt=" BRIAN KIM  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          {/* <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                  alt="player"
                />
                <div className="main_card__image ">
                  <NextImage
                    className="cyprus-img"
                    src={image65}
                    alt="EDDIE TRAN "
                  />
                </div>
                <h4 className="main_card__name">EDDIE TRAN </h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> NACHO BARBERO</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ar.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image66}
                    alt=" NACHO BARBERO  "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div> */}

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">INVITEE</div>
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
