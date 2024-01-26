import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function Root({cateogry,price}) {
  return (
      <Box className='' sx={{display:'flex',flexDirection:'column',marginTop:'60px'}}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            width: 350,
            pt: "30px",
            paddingBottom: "10px",
            gap:24,
            margin:'auto'
            
          }}
          elevation={3}
        >
          <Typography pl="10px" variant="h5">
            {cateogry}
          </Typography>
          <Typography variant="h5">{price}</Typography>
          <IconButton sx={{ position: "absolute", top: "5px", right: "5px",cursor:'pointer' }}>
          <CloseIcon  />
          </IconButton>
        </Paper>
          </Box>
  );
}
