import styled from "styled-components";
import { variant, alignItems, boxShadow } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { buttonStyle, colorStyle, sizeStyle } from "../customVariant";
import { base } from "../base";

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet("#000", "#000")};
  background: linear-gradient(
    90deg,
    rgba(180, 128, 44, 1) 0%,
    rgba(246, 208, 110, 1) 15%,
    rgba(225, 166, 52, 1) 32%,
    rgba(239, 193, 88, 1) 42%,
    rgba(246, 208, 110, 1) 50%,
    rgba(240, 191, 84, 1) 58%,
    rgba(225, 166, 52, 1) 68%,
    rgba(246, 208, 110, 1) 85%,
    rgba(180, 128, 44, 1) 100%,
    rgba(246, 208, 110, 1) 7064%
  );
  min-height: ${themeGet("heights.3", "48")}px;
  min-width: ${themeGet("widths.3", "48")}px;
  border-radius: ${themeGet("radius.0", "3")}px;
  font-family: inherit;
  font-size: ${themeGet("fontSizes.4", "16")}px;
  font-weight: ${themeGet("fontWeights.4", "500")};
  text-decoration: none;
  text-transform: capitalize;
  padding-top: ${themeGet("space.2", "8")}px;
  padding-bottom: ${themeGet("space.2", "8")}px;
  padding-left: ${themeGet("space.4", "15")}px;
  padding-right: ${themeGet("space.4", "15")}px;
  border: 0;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: ${themeGet("space.1", "4")}px;
    padding-right: ${themeGet("space.1", "4")}px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet("space.2", "8")}px;
      padding-right: ${themeGet("space.2", "8")}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;
