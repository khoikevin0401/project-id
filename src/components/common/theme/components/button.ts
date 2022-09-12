export const buttonStyles = {
  components: {
    Button: {
      variants: {
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "sign-up": {
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          fontWeight: "600",
          lineHeight: "19px",
          _hover: {
            opacity: 0.7,
          },
        },
        "submit": {
          background: "#8D81E8",
          color: "#fff",
          border: "none",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          borderRadius: "10px",
          padding: "15px 30px",
          _hover: {
            background: "#6753fa",
          },
        },
        "cancel": {
          background: "none",
          border: "1px solid #000",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "19px",
          borderRadius: "10px",
          padding: "15px 30px",
          _hover: {
            background: "#F7F7F7",
          },
        },
      }
    },
  },
};
