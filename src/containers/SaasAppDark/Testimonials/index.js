import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Section, { ReactSlick, SectionHeading } from "./testimonials.style";
import Link from "next/link";
import Button from "common/components/Button";
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

import image16 from "common/assets/image/player16.jpg";

import image17 from "common/assets/image/player17.jpg";
import image18 from "common/assets/image/player18.jpg";

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

import image46 from "common/assets/image/player46.jpg";

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

import image62 from "common/assets/image/player62.jpg";

import image65 from "common/assets/image/player65.jpg";
import image66 from "common/assets/image/player66.jpg";

import image68 from "common/assets/image/player68.jpg";

import image71 from "common/assets/image/player71.jpg";
import image72 from "common/assets/image/player72.jpg";

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
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image1}
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
                    src={image2}
                    alt="Phil Ivey"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/lt.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage className="cyprus-img" src={image3} alt="Tony G" />
                </div>
                <h4 className="main_card__name">Tony G</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Laszlo Bujtas</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/hu.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image4}
                    alt="Laszlo Bujtas"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image5}
                    alt="Bobby Baldwin"
                  />
                </div>
                <h4 className="main_card__name">Bobby Baldwin</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Ben Lamb</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image6}
                    alt="Ben Lamb"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image7}
                    alt="WAI KIN YONG"
                  />
                </div>
                <h4 className="main_card__name">WAI KIN YONG</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Linus Loeliger</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ch.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image8}
                    alt="Linus Loelige"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/my.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image9}
                    alt="Ivan Leow"
                  />
                </div>
                <h4 className="main_card__name">Ivan Leow</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Michael Addamo</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/au.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image10}
                    alt="Michael Addamo"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">
                Businesswoman
              </div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/nz.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image11}
                    alt="Sosia Jiang"
                  />
                </div>
                <h4 className="main_card__name">Sosia Jiang</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Jason Koon</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image12}
                    alt="Jason Koon"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image13}
                    alt="Phachara Wongwichit"
                  />
                </div>
                <h4 className="main_card__name">Phachara Wongwichit</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Mikita Badziakouski</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image14}
                    alt="Mikita Badziakouski"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Zhenglong Zhou"
                  />
                </div>
                <h4 className="main_card__name">Zhenglong Zhou</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Stephen Chidwick</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image16}
                    alt="Stephen Chidwick"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/az.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image17}
                    alt="Ramin Hajiyev"
                  />
                </div>
                <h4 className="main_card__name">Ramin Hajiyev</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Matthias Eibenger</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/at.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image18}
                    alt="Matthias Eibenger"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/by.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Mikalai Vaskaboinikau"
                  />
                </div>
                <h4 className="main_card__name">Mikalai Vaskaboinikau</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Wiktor Malinowski</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/pl.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image20}
                    alt="Wiktor Malinowski"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image21}
                    alt="Philip Sternheimer"
                  />
                </div>
                <h4 className="main_card__name">Philip Sternheimer</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Adrian Mateos </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/es.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image22}
                    alt="Adrian Mateos"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ir.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image23}
                    alt="Ashkan Fattahi"
                  />
                </div>
                <h4 className="main_card__name">Ashkan Fattahi</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Albert Daher</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://cdn.triton-series.com/wp-content/uploads/2019/12/11113507/ber.png"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image24}
                    alt="Albert Daher"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image25}
                    alt="David Nicholson"
                  />
                </div>
                <h4 className="main_card__name">David Nicholson</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Sam Grafton</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image26}
                    alt="Sam Grafton"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image27}
                    alt="Elton Tsang"
                  />
                </div>
                <h4 className="main_card__name">Elton Tsang</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Mustapha Kanit</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/it.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image28}
                    alt="Mustapha Kanit"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image29}
                    alt="David Einhorn"
                  />
                </div>
                <h4 className="main_card__name">David Einhorn</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Fedor Holz</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/de.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image30}
                    alt="Fedor Holz"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image31}
                    alt="Paul Newey"
                  />
                </div>
                <h4 className="main_card__name">Paul Newey</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">Steve O'Dwyer </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image32}
                    alt="Steve O'Dwyer"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image33}
                    alt="Eric Worren"
                  />
                </div>
                <h4 className="main_card__name">Eric Worre</h4>
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
                    src={image34}
                    alt="Seth Davies"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image35}
                    alt="Jean-Noel Thorel"
                  />
                </div>
                <h4 className="main_card__name">Jean-Noel Thorel </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Erik Seidel </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image36}
                    alt="Erik Seidel"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image37}
                    alt="Morten Klein"
                  />
                </div>
                <h4 className="main_card__name">Morten Klein </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Nick Petrangelo </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image38}
                    alt="Nick Petrangelo"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image39}
                    alt="Rob Yong"
                  />
                </div>
                <h4 className="main_card__name">Rob Yong </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Espen Jorstad </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image40}
                    alt="Espen Jorstad"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image41}
                    alt="Punnat Punsri "
                  />
                </div>
                <h4 className="main_card__name">Punnat Punsri </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> DANNY TANG </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/hk.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image42}
                    alt="DANNY TANG"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image43}
                    alt="Karl Chappe-Gatien "
                  />
                </div>
                <h4 className="main_card__name">Karl Chappe-Gatien </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Rui Cao </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image44}
                    alt="Rui Cao"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/in.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Santhosh Suvarna"
                  />
                </div>
                <h4 className="main_card__name">Santhosh Suvarna</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Patrik Antonius </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/fi.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image46}
                    alt="Patrik Antonius "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Sam Miller"
                  />
                </div>
                <h4 className="main_card__name">Sam Miller</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Michael Zhang </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image48}
                    alt="Michael Zhang "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image49}
                    alt="Scott Ball"
                  />
                </div>
                <h4 className="main_card__name">Scott Ball</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Chris brewer </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image50}
                    alt="Chris brewer "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/th.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image51}
                    alt="Kannapong Thanarattrakul"
                  />
                </div>
                <h4 className="main_card__name">Kannapong Thanarattrakul</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Isaac Haxton </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image52}
                    alt=" Isaac Haxton "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image53}
                    alt="Johan Guilbert"
                  />
                </div>
                <h4 className="main_card__name">Johan Guilbert</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Aleksejs Ponakovs </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/lv.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image54}
                    alt=" Aleks Ponakovs "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image55}
                    alt="Andrew Pantling"
                  />
                </div>
                <h4 className="main_card__name">Andrew Pantling</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Sam Greenwood </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ca.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image56}
                    alt=" Sam Greenwood "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image57}
                    alt="Phil Nagy"
                  />
                </div>
                <h4 className="main_card__name">Phil Nagy</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Ebony Kenney </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image58}
                    alt=" Ebony Kenney "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/sn.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Hassan Nashar"
                  />
                </div>
                <h4 className="main_card__name">Hassan Nashar</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Artur Martisosian </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/ru.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt=" Artur Martisosian "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cz.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image65}
                    alt="Leon Tsoukernik"
                  />
                </div>
                <h4 className="main_card__name">Leon Tsoukernik</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> ElkY Grospellier</h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image66}
                    alt=" ElkY Grospellier"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/tr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Sinan Unlu"
                  />
                </div>
                <h4 className="main_card__name">Sinan Unlu</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> David Peters </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image68}
                    alt=" David Peters "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/cn.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Wei Nan"
                  />
                </div>
                <h4 className="main_card__name">Wei Nan</h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Dan Cates </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                    alt="player"
                  />
                  <NextImage
                    className="cyprus-img"
                    src={image62}
                    alt=" Dan Cates "
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/gb.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image71}
                    alt="Talal Shakerchi"
                  />
                </div>
                <h4 className="main_card__name">Talal Shakerchi</h4>
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
                    src={image72}
                    alt=" Christoph Vogelsang"
                  />
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">Businessman</div>
              <div className="cell small gold-card-header">
                <img
                  className="flag-PlayerPhoto"
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="Sean Perry "
                  />
                </div>
                <h4 className="main_card__name">Sean Perry </h4>
              </div>
              <div className=" cell small main_card__invites">INVITES</div>
              <div className="cell small main__card__bottom">
                <h4 className="main_card__name"> Felipe Ramos </h4>
                <div className="main_card__image">
                  <img
                    className="flag-PlayerPhoto"
                    src="https://prod-assets.tritonpoker.plus/flags/1x1/br.svg"
                    alt="player"
                  />
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
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#ffffff,#efede9) !important",
                    }}
                  >
                    ?
                  </span>
                </div>
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
                <div className="main_card__image">
                  <span>?</span>
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#ffffff,#efede9) !important",
                    }}
                  >
                    ?
                  </span>
                </div>
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
                <div className="main_card__image">
                  <span>?</span>
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#ffffff,#efede9) !important",
                    }}
                  >
                    ?
                  </span>
                </div>
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
                <div className="main_card__image">
                  <span>?</span>
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#ffffff,#efede9) !important",
                    }}
                  >
                    ?
                  </span>
                </div>
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
                <div className="main_card__image">
                  <span>?</span>
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className=" cell small main_card__invites">BUSINESSMAN</div>
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg,#ffffff,#efede9) !important",
                    }}
                  >
                    ?
                  </span>
                </div>
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <h4 className="main_card__name">NOT ANNOUNCED</h4>
                <div className="main_card__image">
                  <span>?</span>
                </div>
              </div>
              <div className=" cell small main_card__invites">PRO PLAYER</div>
            </div>
          </div>
        </ReactSlick>
        <div className="px-3 pt-14 text-center hidden md:block">
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
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
