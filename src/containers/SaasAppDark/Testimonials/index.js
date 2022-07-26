import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Text from "common/components/Text";
import Container from "common/components/UI/Container";
import { testimonials } from "common/data/SaasAppDark";
import Section, {
  AuthorInfo,
  Item,
  ReactSlick,
  SectionHeading,
} from "./testimonials.style";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
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
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>
            </div>
          </div>

          <div className="main_card cell auto">
            <div className="grid-x">
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>
            </div>
          </div>
          <div className="main_card cell auto">
            <div className="grid-x">
              <div className="cell small gold-card-header">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>

              <div className=" cell small main_card__invites">INVITES</div>

              <div className="cell small main__card__bottom">
                <div className="main_card__image">
                  <span>?</span>
                </div>
                <h4 className="main_card__name">Not announced</h4>
              </div>
            </div>
          </div>
        </ReactSlick>
      </Container>
    </Section>
  );
};

export default Testimonials;
