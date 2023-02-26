import React from 'react'
import { AppBar , Toolbar , Box , Typography } from '@mui/material'
import {grey} from '@mui/material/colors'


const Navbar = () => {
  const color = grey[800];
  const secColor = grey[400];
        return (
            <Box sx={{ flexGrow: 1}}>
              <AppBar position="static" >
                <Toolbar sx={{backgroundColor:color}}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ 
                      flexGrow: 1,
                      display: { xs: 'none', sm: 'block' },
                      backgroundColor: color, 
                      color: secColor, 
                      fontWeight: 'bold', 
                      fontSize: '1.5rem' }}
                  >
                    Crpytocurrency Realtime Price
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          );
}

export default Navbar
