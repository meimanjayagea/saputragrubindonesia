import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import Label from '../../components/Label';

const StyledInput = withStyles({
  root: {
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    '& .MuiInputBase-input': {
      border: "1px solid #BCC8E7",
      borderRadius: 6,
      padding: 10,
      fontSize: 15,
      color: "#2B2F3C",
      background: "#FFFFFF",

      "&::placeholder": {
        color: "#BCC8E7",
      },

      "&:focus": {
        border: "1px solid #ee8448 !important",
      }
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none"
    },
    '& .MuiInput-underline:hover': {
      borderBottom: "none"
    },
  }
})(TextField);

const TextInput = ({ placeholder, caption, value, onChange, disabled, onFocus, type }) => {
  return (
    <div>
      <Label color="#2B2F3C" size={13} style={{paddingBottom: 5}}>{caption}</Label>
      <StyledInput 
        fullWidth 
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
      />
    </div>
  );
};

export default TextInput;
