export const styles = {
  element: {
    "padding": 1,
    "boxShadow": "0 0 0 2px transparent",
    "cursor": "pointer",
    "transition": "box-shadow 200ms",
    "&:hover": {
      boxShadow: "0 0 0 2px #a88041",
    },
  },
  elementInner: {
    display: "flex",
    bgcolor: "grey.200",
    height: "400px",
  },
  elementImage: {
    flexGrow: 1,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  elementContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
    padding: 3,
  },
};
