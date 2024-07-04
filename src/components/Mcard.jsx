import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const bull = (
  <Box
    component="span"
    sx={{ display: 'block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Mcard = () => {
  return (
    <div>
      
    <Card style={{ marginTop: '5%', borderColor:'black',borderWidth:'5px',backgroundColor:'pink', padding:'2px'}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Sitcom Series 
      </Typography>
      <Typography variant="h5" component="div">
        F.r.i.e.n.d.s
        {/* be{bull}nev{bull}o{bull}lent */}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        year:1994
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  
   
   <Card style={{ marginTop: '5%', borderColor:'black',borderWidth:'5px',backgroundColor:'pink'}}>
   <CardContent>
     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Movie 
     </Typography>
     <Typography variant="h5" component="div">
       inception
       {/* be{bull}nev{bull}o{bull}lent */}
     </Typography>
     <Typography sx={{ mb: 1.5 }} color="text.secondary">
       year:2010
     </Typography>
   </CardContent>
   {/* <CardActions>
     <Button size="small">Learn More</Button>
   </CardActions> */}
 </Card>
 
 </div>
  )
}

export default Mcard