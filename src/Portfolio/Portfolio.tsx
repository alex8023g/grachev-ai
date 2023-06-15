import Typography from '@mui/material/Typography';
import React from 'react';
import './portfolio.css';
import { Layout } from '../Layout';
import Paper from '@mui/material/Paper';
import pomodoroImg from '../img/pomodoro.png';
import evklidImg from '../img/evklid.png';
import evklid2Img from '../img/evklid2.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import styles from './portfolio.css';

export function Portfolio() {
  return (
    <Layout>
      <Typography variant='h2' component='h1'>
        Портфолио
      </Typography>
      <Box display='flex' flexWrap='wrap' maxWidth={500} justifyContent={'center'}>
        <a href='https://pomodoro-alpha-six.vercel.app' target='_blank'>
          <img src={evklid2Img} alt='' width={400} height={500} />
        </a>
        <Paper
          elevation={9}
          sx={{ padding: 3, borderRadius: 2, width: 340, height: 100 }}
        >
          Stack: React, Material UI, Drag&Drop, ReCharts,
        </Paper>
      </Box>
      {/* 
      <a href='https://evklid-henna.vercel.app' target='_blank'>
        <img src={evklidImg} alt='' width={400} height={500} />
      </a> */}

      <img src={evklid2Img} alt='' width={400} height={500} />
      <Card
        sx={{ maxWidth: 400 }}
        elevation={9}
        onClick={(e) => {
          window.open('https://evklid-henna.vercel.app/');
        }}
      >
        <CardActionArea>
          <CardMedia component='img' height='550' image={evklidImg} alt='green iguana' />
          <CardContent sx={{ backgroundColor: '#e8e7e6' }}>
            <Typography gutterBottom variant='h5' component='div'>
              stack
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Html, CSS
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Layout>
  );
}
