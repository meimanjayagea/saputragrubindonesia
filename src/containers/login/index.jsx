import React from "react";
import { Box } from "@material-ui/core";
import TextField from "../../components/Textfield";
import Button from "../../components/Buttom";
import Label from "../../components/Label";
import { makeStyles } from "@material-ui/styles";

const login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Box marginBottom={3}>
          <Label>Selamat Datang di Website saya</Label>
        </Box>
        <Box
          boxShadow={3}
          style={{
            display: "inline-block",
            justifyContent: "center",
            margin: "25px",
            width: "600px",
            height: "450px",
            background: "#FFF5EE",
            border: "1 solid #FF7F50",
            borderRadius: "10px",
          }}
        >
          <Box mb="3" display="flex" justifyContent="center">
            <Box style={{ marginX: "50px", padding: "20px" }}>
              <Button outlined>Registrasi</Button>
            </Box>

            <Box style={{ marginX: "50px", padding: "20px" }}>
              <Button color="#FF7F50">Masuk</Button>
            </Box>
          </Box>

          <Box mb="3">
            <Box style={{ marginX: "50px", padding: "20px" }}>
              User Name/Email
            </Box>

            <Box style={{ marginX: "50px", padding: "20px" }}>
              Password
              {/* <TextField placeholder="Password" /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default login;
