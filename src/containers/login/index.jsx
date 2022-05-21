import React, { useState } from "react";
import { Box, Grid} from "@material-ui/core";
import Button from "../../components/Buttom";
import Label from "../../components/Label";
import { makeStyles } from "@material-ui/styles";
import TextField from "../../components/TextField"
import background from "../../assets/bg.svg";
import logo from "../../assets/logo.png";

const login = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box
        boxShadow={3}
        style={{
          zIndex:"99",
          direction:"column",
          justify:"center",
          alignItems:"center",
          width: "35vw",
          height: "530px",
          background: "#FFF5EE",
          border: "1px solid #ee8448",
          borderRadius: "20px",
        }}
      >
        <Box
          bottom={0}
          left={0}
          right={0}
          justifyContent="center"
          display="flex"
        >
          <img src={logo} width="20%" alt="" />
        </Box>
        <Box
          bottom={0}
          left={0}
          right={0}
          justifyContent="center"
          display="flex"
        >
          <Label size="40px" weight="600">
            Saputra Group Indonesia
          </Label>
        </Box>
          <Label align={"center"}>Silahkan Masukkan Username dan Kata Sandi</Label>
        <Box
          mb="3"
          display="flex"
          justifyContent="center"
          marginX="60px"
          marginTop="20px"
          marginBottom="25px"
          borderRadius="10px "
        >
          <Box
            boxShadow={2}
            style={{
              backgroundColor: "#000000",
              width: "50%",
              padding: "10px",
              cursor: "pointer",
              color: "#ffffff",
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            Daftar
          </Box>

          <Box
            boxShadow={2}
            style={{
              backgroundColor: "#ee8448",
              width: "50%",
              padding: "10px",
              color: "#ffffff",
              cursor: "pointer",
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            Masuk
          </Box>
        </Box>

        <Box
          padding="0 60px"
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Box>
            <TextField caption="Username :" placeholder={"Username"}></TextField>
          </Box>
          <Box marginY="15px">
            <TextField caption="Password :" placeholder={"Password"} type={"password"}></TextField>
          </Box>
          <Grid item xs={12}>
            <Label>Lupa Password</Label>
          </Grid>
          <Box marginTop="15px">
            <Button fullWidth> Login </Button>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        justifyContent="center"
        display="flex"
      >
        <img src={background} width="100%" alt="" style={{ opacity: 0.1 }} />
      </Box>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    backgroundColor: "#ee8448",
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
export default login;
