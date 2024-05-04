import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "#cf2420",
      algorithm: true, // Enable algorithm
      // paddingContentVerticalLG: ,
      paddingContentHorizontal: 50,
    },
  },
  token: {
    // Seed Token
    colorPrimary: "#cf2420",
    borderRadius: 2,
    padding: 10,

    // Alias Token
    colorBgContainer: "#f6ffed",
  },
};

export default theme;
