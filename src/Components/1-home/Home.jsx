import { Box, Typography } from '@mui/material'
import './home.css'
import Papers from "../1-home/Papers";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    
    <Box >
      <Helmet>
        <title>Home</title>
        <meta name="description" content="" />
      </Helmet>
    <Papers cateogry='Gym' price='100 $'/>
    <Papers cateogry='Water' price='22 $'/>
    <Papers cateogry='Food' price='30 $'/>
    <Papers cateogry='Bills' price='50 $'/>
<Typography sx={{textAlign:'center',mt:'30px'}} variant="body1" >&#128073;	You Spend $202</Typography>
    </Box>
  )
}
