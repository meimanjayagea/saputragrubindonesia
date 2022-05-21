import React from "react";
import Typography from "@material-ui/core/Typography";

const Label = ({ children, color, size, weight, align, italic, style, font }) => {
  return (
    <Typography
      color="textPrimary"
      style={{
        color,
        fontFamily: font && font,
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        lineHeight: 1.5,
        fontStyle: italic ? "italic" : null,
        ...style
      }}
    >
      {children && children}
    </Typography>
   );
}
 
export default Label;
