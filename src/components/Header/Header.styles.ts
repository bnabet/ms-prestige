export const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid #444444",
    position: "fixed",
    left: 0,
    width: "100%",
    p: 2,
    backgroundColor: "#111111",
    zIndex: 1,
  },
  headerInner: {
    display: "flex",
    flex: 1,
    lineHeight: 0,
    // marginRight: "auto",
    justifyContent: "space-between",
  },

  // HeaderDetails
  headerDetails: {
    display: "flex",
    gap: 6,
  },
  headerDetail: {
    display: "flex",
    flexDirection: "column",
    rowGap: "7px",
  },
  headerDetailLabel: {
    color: "grey.700",
  },
};
