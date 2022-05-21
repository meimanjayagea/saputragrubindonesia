import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Label from "../../SC/Label";
import { useHistory } from "react-router-dom";

const ContentWrapper = ({ children, title, style, height="calc(100vh - 64px)" }) => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Box p={2} height={height} overflow="scroll" style={style}>
      <Box className={classes.container}>
        
        {/* TITLE */}
        {title && <Label size={24} weight={600}>{title}</Label>}

        { children }
      </Box>
    </Box>
   );
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    position: "relative",

    "& .ant-checkbox-checked .ant-checkbox-inner": {
      backgroundColor: "#BC0001",
      borderColor: "#BC0001"
    }
  }
})
 
export default ContentWrapper;
