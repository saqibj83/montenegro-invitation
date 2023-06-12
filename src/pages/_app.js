import { Modal } from "@redq/reuse-modal";
import { appWithTranslation } from "next-i18next";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "common/assets/css/globals.css";
import "common/assets/css/iconmoon.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";

const CustomApp = ({ Component, pageProps }) => {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
};
export default appWithTranslation(CustomApp);
