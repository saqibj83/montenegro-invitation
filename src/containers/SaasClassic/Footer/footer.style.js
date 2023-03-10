import styled from "styled-components";
import FooterImage from "common/assets/image/hosting/footer-bg.png";
import fb from "common/assets/image/saasClassic/social/fb.png";
import twitter from "common/assets/image/saasClassic/social/twitter.png";
import instagram from "common/assets/image/saasClassic/social/instagram.png";
import twitch from "common/assets/image/saasClassic/social/twitch.png";
import youtube from "common/assets/image/saasClassic/social/youtube.png";
import discord from "common/assets/image/saasClassic/social/discord.png";

const FooterWrapper = styled.footer`
  position: relative;
  background: #000;
  overflow: hidden;
  padding: 15px 0 40px 0;
  margin-top: 0;
a {
  color:#fff ;
}
a:hover {
  color:#EBA800;
}
.footer-nav__col-title {
  display: block;
  font-size: 18px;
  line-height: 100%;
  text-transform: capitalize;
  color: #EBA800;
  margin-bottom: 8px;
  letter-spacing: 1px;
}
.footer-top__social ul {
  display: flex;
}
.footer-top__social ul li {
  margin-right: 8px;
}
.footer-top__social ul li a {
  color: #fff;
  font-size: 16px;
  min-width: 60px;
  padding: 0 10px 0 0;
}
.footer-top__social ul li i {
  font-size: 8px;
  padding-right: 10px;
}
.btn {
  height: 50px;
  line-height: 35px;
  outline: none;
  background: #EBA800;
  padding: 0 30px;
  font-weight: 700;
  font-size: 17px;
  color: #222;
  text-transform: uppercase;
  display: inline-block;
  transition: all .3s linear;
  font-family: gill-sans-nova;
  border-radius: 0;
  border: 1px solid #e3b55f;
}
.footer-nav_cotact p {
  color: #fff;
}
.footer-nav_cotact ul {
  width: 115%;
  float: left;
}
.footer-nav_cotact ul li {
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  float: left;
  list-style:none;
}
.footer-nav_cotact ul li i {
  float: left;
  padding: 5px 5px 10px 0px;
}
.footer-top {
  padding: 30px 0 0;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,.1);
}
.footer-copy {
  padding-top: 20px;
  padding-bottom: 4px;
  font-size: 14px;
  line-height: 170%;
  color: #999;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
a.linkFooter {
    color: #EBA800;
    padding: 0 15px;
}
ul.social {
  list-style: none;
    padding: 0px;
    margin: 25px -20px 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
}
.social li {
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 10px;
  width: 223px;
  height: 76px;
}
.social li.facebook {
  background-image: url(${fb?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}
.social li.twitter {
  background-image: url(${twitter?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}

.social li.instagram {
  background-image: url(${instagram?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}

.social li.twitch {
  background-image: url(${twitch?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}

.social li.youtube {
  background-image: url(${youtube?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}

.social li.discord {
  background-image: url(${discord?.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}

@media (max-width: 767px) {
  h2 {
    margin-top: 30px !important;
    font-size: 20px;
  }
  .btn-footer {
    top: 10px !important;
    width:100%
  }
  input[type="email"] {
    width: 100%;
  }
  @media (max-width: 600px){
    a.link-fon {
      font-size: 9px;
    }
    
    .footer-top__social ul {
      display: block;
    }
    .footer-top__social ul li {
      width: 45%;
      float: left;
      margin-bottom: 10px;
    }
    .btn {
      width: 100%;
      margin-top: 10px;
    }
    .footer-nav__col-title {
      float: left;
      width: 100%;
    }
    .footer-nav_subscribe {
      float: left;
      width: 100%;
      margin-bottom:30px;
    }
    ul.social {
      display: inline !important;
      float: left;
    }
    } .social li.facebook, .social li.twitter, .social li.instagram, .social li.twitch,.social li.youtube, .social li.discord {
      background-size: contain;
    }
    .social li {
      width: 180px;
    }
    a.linkFooter {
      color: #EBA800;
      padding: 0 5px;
    }
    .footer-copy {
      display:block;
    }
}

  input {
    font-size: 16px;
    font-weight: 400;
    color: #000;
    padding: 13px 15px !important;
    border-color: #514f50;
    width: 70%;
    float: left;
    margin-right: 10px;
    @media (max-width: 575px) {
      height: 48px;
    }
  }
.btn-footer{
  position: relative;
  top: -21px;
  background: linear-gradient(to right, #EBA8000%, #ffe8b9 34%, #f7a500 94%, #d89127 100%);
  color: #000;
}
  .email_input {
    flex-grow: 1;
    margin-right: 20px;
    margin-bottom: 40px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #000;
        }
        .highlight {
          background: #000;
          height: 1px;
        }
      }
    }
  .footer_container {
    background-repeat: no-repeat;
    background-position: center 50px;
    padding-top: 0;
    padding-bottom: 80px;
    position: relative;
    @media (min-width: 576px) {
      background-image: url(${FooterImage?.src});

    }
    @media (max-width: 990px) {
      padding-bottom: 40px;
    }
    @media (max-width: 767px) {
      padding-bottom: 0px;
      h2 {
        margin-top: 100px !important
      }
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: #898888;
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #343d48;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
