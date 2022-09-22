import { ComponentStyleConfig } from "@chakra-ui/theme";

export default {
  baseStyle: {
    height: "34px",
    borderRadius: "80px",
    color: "rgba(0, 0, 0, 0.87)",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    border: "none",
    outline: "none",
    bg: "#F4E041",
    _hover: {
      bg: "#FFE302",
    },
    _disabled: {
      color: "rgba(255, 255, 255, 0.87)",
      bg: "#B4B4B4",

      _hover: {
        bg: "#B4B4B4 !important",
      },
    },
  },
  variants: {
    normal: {
      height: "34px !important",
      width: "100px",
    },
    showMore: {
      height: "34px !important",
      width: "120px",
    },
  },
} as ComponentStyleConfig;
