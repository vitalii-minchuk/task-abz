import { extendTheme } from "@chakra-ui/react";
import Button from "./MyButton";

const activeLabelStyles = {
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#7E7E7E",
  transform: "translateY(-21px)",
};

export default extendTheme({
  breakpoints: {
    lgX: "1170px",
  },
  colors: {
    myColors: {
      blue: "#00BDD3",
      yellow: "#F4E041",
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#E5E5E5",
      },
    }),
  },
  components: {
    Button,
    Radio: {
      baseStyle: {},
      variants: {
        myRadio: {
          parts: ["control", "label"],
          control: {
            width: "20px",
            height: "20px",
            border: "1px solid",
            borderColor: "#D0CFCF !important",

            _before: {
              width: "10px",
              height: "10px",
              background: "#00BDD3 !important",
            },
            _checked: {
              borderColor: "#00BDD3 !important",
              background: "transparent",
            },
          },
          label: {
            marginLeft: "12px",
          },
        },
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input, input:hover, input:focus-visible": {
              border: "1px solid #D0CFCF",
              boxShadow: "none",
              borderRadius: "4px",
              margin: "0 auto",
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: "6px",
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "#E5E5E5",
              pointerEvents: "none",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              color: "#7E7E7E",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
