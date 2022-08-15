import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";
import Section, { ReactSlick, SectionHeading } from "./testimonials.style";
import prevArr from "common/assets/image/left-arrow.svg";
import nextArr from "common/assets/image/right-arrow.svg";
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
import image36 from "common/assets/image/player36.jpg";
import image38 from "common/assets/image/player38.jpg";
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
                    src={imageDef}
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
                    src={imageDef}
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
                    alt="David Einhorn"
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
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/us.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={image33}
                    alt="David Einhorn"
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
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/fr.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="David Einhorn"
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
                  src="https://prod-assets.tritonpoker.plus/flags/1x1/no.svg"
                  alt="player"
                />
                <div className="main_card__image">
                  <NextImage
                    className="cyprus-img"
                    src={imageDef}
                    alt="David Einhorn"
                  />
                </div>
                <h4 className="main_card__name">JMorten Klein </h4>
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
                    alt="Fedor Holz"
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
      </Container>
    </Section>
  );
};

export default Testimonials;
