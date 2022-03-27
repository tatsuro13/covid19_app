import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from '../covidSlice';
import PieChart from '../PieChart/PieChart';
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import styles from './DashBoard.module.css'

const DashBoard:React.VFC = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    useEffect(()=>{
        dispatch(fetchAsyncGet());
        dispatch(fetchAsyncGetDaily());
    },[dispatch])
  return (
    <>
    <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" sx={{flexGlow:1}}>
            Covid 19 Live Dashboard
          </Typography>
          {data && (
            <Typography variant="body1">
              ：{new Date(data.lastUpdate).toDateString()}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop: '85px'}}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>

          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
      </>
  )
}

export default DashBoard