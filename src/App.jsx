import React from 'react'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { Grid, Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors'


/*responsive grid container for the entire app*/
const App = () => {
    const [coins, setCoins] = useState([])
    const maincolor = blueGrey[900]
    const secondarycolor = blueGrey[700]

    useEffect(() => {
        const fetchCoins = async () => {
            const res = await fetch('https://api.coincap.io/v2/assets?limit=20')
            const data = await res.json()
            console.log(data.data)
            setCoins(data.data)
        }

        fetchCoins()
    }, [])



    return (
        <div className='background'>
            <Navbar />

            <Grid container spacing={6} justifyContent="flex-start">

                {/*map through the coins array and return a grid item for each coin*/}
                {coins.map(coin => {
                    return (

                        //responsive grid item
                        <Grid item xs={6} md={4} lg={3} >
                            <Box
                                display='flex'
                                height={150}
                                sx={{
                                    backgroundColor: maincolor,
                                    '&:hover': { backgroundColor: secondarycolor }
                                }}
                                paddingTop={0.5}
                            > 

                                <ul>
                                    <li key={coin.id} className="coinlist" />
                                    <li className='symbol'>{coin.symbol}</li>
                                    <li className='priceUsd'>${coin.priceUsd.slice(0, 15)}</li>

                                {/*nested responsive grid container for 24hr change and volume*/}
                                <Grid container paddingTop={1}>
                                    <Grid item xs={6}>
                                        <div>24Hr Change:</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div>Volume:</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {
                                            coin.changePercent24Hr < 0 ?
                                            (<div className='red'>{coin.changePercent24Hr.slice(0, 10)}</div>):
                                            (<div className='green'>{coin.changePercent24Hr.slice(0, 10)}</div>)
                                        }
                                        
                                    </Grid>
                                    <Grid item xs={6} overflow="hidden">
                                    <div>{coin.volumeUsd24Hr.slice(0, 12)}</div>
                                    </Grid>
                                </Grid>
                                </ul>
                            </Box>
                        </Grid>
                    )
                })}

            </Grid>

        </div>
    )
}

export default App