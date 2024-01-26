import { Box, Button, FormControl, useTheme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const theme = useTheme();
  return (
    <div>
      <Helmet>
        <title>Create</title>
        <meta name="description" content="" />
      </Helmet>
      <div
        style={{
          marginLeft: "650px",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
          sx={{ m: 1, width: "400px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="filled-adornment-amount">
            Transction title
          </InputLabel>
          <FilledInput
            sx={{ mb: "50px" }}
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">&#128073; </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
        
          onChange={(eo) => {
            setprice(Number(eo.target.value));
          }}
          sx={{ m: 1, width: "400px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="filled-adornment-amount">Amount </InputLabel>
          <FilledInput
            sx={{ mb: "50px" }}
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">$ </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <Button
        onClick={(params) => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          });
        }}
        variant="contained"
        sx={{
          ml: 83,
          backgroundColor: theme.palette.bgLink.main,
          color: "white",
          "&:hover": {
            backgroundColor: "#004d40",
          },
        }}
      >
        Submit
      </Button>
    </div>
  );
}
