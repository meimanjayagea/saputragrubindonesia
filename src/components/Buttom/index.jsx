import React from "react";
import { makeStyles } from "@material-ui/core";
import Buttons from "@material-ui/core/Button";

const Button = ({
  disabled,
  outlined,
  text,
  children,
  startIcon,
  endIcon,
  fullWidth,
  onClick,
  type,
  color,
  height,
  style
}) => {
  
  const useStyleSGI = makeStyles({
    primary: {
      fontFamily: 'Futura',
      fontSize: 13,
      fontWeight: 700,
      borderRadius: 6,
      boxShadow: "0px 6px 6px 2px rgba(251, 127, 80, 0.12)",
      border: outlined ? '1px solid #FF7F50' : 'initial',
      "&:hover": {
        boxShadow: "0px 6px 6px 2px rgba(251, 127, 80, 0.12)",
      },
    },
    disabled: {
      fontFamily: 'Futura',
      fontSize: 13,
      fontWeight: 700,
      borderRadius: 6,
      backgroundColor: "#BCC8E7",
      boxShadow: "0px 6px 6px rgba(188, 200, 231, 0.2)",
      "&:hover": {
        boxShadow: "0px 6px 6px rgba(188, 200, 231, 0.2)",
        cursor: "not-allowed",
        backgroundColor: "#BCC8E7",
      },
    },
  });

  const classes = useStyleSGI();

  return (
    <Buttons
      type={type}
      variant={text ? null : (outlined ? "outlined" : "contained")}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      disabled={disabled}
      fullWidth={fullWidth}
      color={disabled ? "secondary" : "primary"}
      className={text ? null : (disabled ? classes.disabled : classes.primary)}
      onClick={onClick}
      style={{
        backgroundColor: color ? color : (outlined && "white"),
        pointerEvents: disabled ? "none" : null,
        textTransform: "none",
        height,
        ...style
      }}
    >
      {children ? children : "Button"}
    </Buttons>
  );
}
 
export default Button;