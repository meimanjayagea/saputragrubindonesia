import React, { useState } from "react";
import { IconButton, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { ReactComponent as Eye} from "./assets/eye.svg";
import { ReactComponent as EyeOff} from "./assets/eye-off.svg";
import { colors } from "../Colors";
import Label from "../Label";
import styled from "styled-components";

const Textfield = ({
  label,
  placeholder,
  message,
  error = false,
  fullWidth = true,
  startIcon,
  isPassword,
  redEye,
  onChange = () => { },
  value,
  multiline = false,
  rows,
  disabled = false,
  style,
  autoFocus,
  maxLength = 255,
  showLength = false,
  onKeyUp
}) => {
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [showError, setShowError] = useState(null);
  const [showLengthLabel, setShowLengthLabel] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.value.length > maxLength) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    onChange(e);
  }

  return (
    <Wrapper style={{width: fullWidth ? "100%" : "auto" }}>
      {label && <Label color={disabled ? "#BCC8E7" : ((error || showError) && colors.alert)}>{label}</Label>}
      <TextField
        autoFocus={autoFocus}
        type={isPassword ? (values.showPassword ? 'text' : 'password') : "text"}
        error={showError ? showError : error}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={message}
        onChange={handleChange}
        value={value}
        variant="outlined"
        color="secondary"
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        style={style}
        autoComplete={'' + Math.random()}
        onFocus={() => {
          setShowLengthLabel(true);
          setReadOnly(false)
        }}
        onBlur={() => setShowLengthLabel(false)}
        onKeyUp={onKeyUp}
        
        InputProps={{
          readOnly: readOnly,
          className: `textfield ${(error || showError) ? "error" : null}`,
          startAdornment: startIcon && (
            <InputAdornment
              position="start"
              style={{
                // color: (error || showError) ? colors.alert : colors.gray.medium,
                marginRight: 0,
              }}
            >
              {startIcon}
            </InputAdornment>
          ),
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                color={redEye ? "primary" : "secondary"}
                style={{color: (error || showError) && colors.alert, padding: 0}}
              >
                {values.showPassword ? <Eye /> : <EyeOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {showLength && showLengthLabel && (
        <LengthWrapper>
          <Label size={13} color={showError || error ? colors.alert : "#6889FF"}>
            {value?.length}/{maxLength}
          </Label>
        </LengthWrapper>
      )}
    </Wrapper>
   );
}

const LengthWrapper = styled.div`
  p {
    position: absolute;
    bottom: -23px;
    right: 0;
  }
`;
const Wrapper = styled.div`
  position: relative;

  .MuiInputBase-root {
    font-size: 15px;
    background-color: ${colors.white};
    .MuiInputAdornment-root {
      color: ${colors.gray.medium};
    }
  }
  .Mui-focused {
    .MuiInputAdornment-root {
      color: #6889FF;
    }
  }
  .MuiFormHelperText-contained {
   margin-left: 0;
  }
  .MuiFormHelperText-root {
    font-size: 13px;
    color: ${colors.gray.medium};
  }
  .MuiFormHelperText-root.Mui-error {
    color: ${colors.alert};
  }
  .MuiOutlinedInput-input {
    padding: 10px;
  }
  .MuiInputBase-input::placeholder {
    color: ${colors.gray.medium};
  }
  .MuiInputBase-multiline {
    padding: 0;
  }
  .MuiInputBase-input.Mui-disabled {
    background-color: #EEF3FF;
    color: #BCC8E7;
    border-radius: 6px;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border: 1px solid ${colors.gray.medium};
    }
    &:hover fieldset {
      border: 1px solid ${colors.gray.medium};
    }
    .MuiInputBase-input:focus {
      color: #6889FF;
    }
    &.Mui-focused fieldset {
      border: 1px solid #6889FF;
      .MuiInputBase-input:focus {
        color: green !important;
      }
    }
    &.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${ colors.gray.medium };
    }
  }

  .textfield {
    margin-top: 5px;
    &.error {
      .MuiInputBase-input, .MuiInputBase-input:focus {
        color: ${colors.alert};
      }
      .MuiInputBase-input::placeholder {
        color: ${colors.alert};
      }
      &.Mui-focused fieldset {
        border: 1px solid ${colors.alert};
      }
      .MuiInputAdornment-root {
        color: ${colors.alert};
      }
    }
  }

  /* Error message */
  .MuiFormHelperText-root {
    position: absolute;
    bottom: -23px;
  }
`;
 
export default Textfield;