import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import NormalClock from "./timer";
const deadline = new Date("2022/09/05 14:00:00 ");
import SectionWrapper, { ContentWrapper } from "./countdown.style";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { youtube } from "react-icons-kit/icomoon/youtube";
import { twitch } from "react-icons-kit/icomoon/twitch";

const CountDownSection = () => {
  return (
    <SectionWrapper
      className="bg-event"
      id="watch_live"
      style={{
        background:
          "url(https://cdn.triton-series.com/wp-content/uploads/2019/12/12113534/bg-event.jpg)",
      }}
    >
      <Container>
        <ContentWrapper>
          {/* <Heading content="COUNTDOWN To Event " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade> */}
          <h2>LIVESTREAM CHANNELS</h2>
          <Link href="https://www.youtube.com/c/TritonPoker/" legacyBehavior>
            <a target="_blank">
              <button class="btn btn-youtube">
                <Icon size={30} icon={youtube} />
                <span>Youtube</span>
              </button>
            </a>
          </Link>
          <Link href="https://twitch.tv/tritonpoker" legacyBehavior>
            <a target="_blank">
              <button class="btn btn-twitch">
                <Icon size={30} icon={twitch} />
                <span>Twitch</span>
              </button>
            </a>
          </Link>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
