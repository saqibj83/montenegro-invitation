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
                  <NextImage className="cyprus-img" src={image1} alt="player" />
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
                  <NextImage className="cyprus-img" src={image2} alt="player" />
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
                  <NextImage className="cyprus-img" src={image3} alt="player" />
                </div>
                <h4 className="main_card__name">Tony Guoga</h4>
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
                  <NextImage className="cyprus-img" src={image4} alt="player" />
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
