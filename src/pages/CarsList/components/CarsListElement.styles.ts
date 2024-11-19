export const styles = {
  element: {
    "padding": 1,
    "borderRadius": 2,
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
    borderRadius: 2,
    overflow: "hidden",
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
