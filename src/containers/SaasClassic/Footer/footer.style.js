import styled from "styled-components";
import FooterImage from "common/assets/image/hosting/footer-bg.png";

const FooterWrapper = styled.footer`
  position: relative;
  background: #011933;
  overflow: hidden;
  padding: 15px 0 40px 0;
  margin-top: 0;
a {
  color:#fff ;
}
a:hover {
  color:#EBA800;
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
a.link-fon {
  font-size: 9px;
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
          background: #011933;
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
