import Typography from '@mui/material/Typography';
import React from 'react';
import st from './portfolio.module.css';
import { Layout } from '../Layout';
import Paper from '@mui/material/Paper';
import pomodoroImg from '../img/pomodoro.png';
import evklidImg from '../img/evklid.png';
import evklid2Img from '../img/evklid2.png';
import monitoringsiImg from '../img/monitoringsi.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardSite } from '../CardSite';

const sites = [
  {
    href: 'https://evklid-henna.vercel.app/',
    image: evklid2Img,
    stack: 'HTML, CSS, Swiper.',
  },
  {
    href: 'https://pomodoro-alpha-six.vercel.app/',
    image: pomodoroImg,
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Rechart, Material
                  UI.`,
  },
  {
    href: 'https://80-78-248-80.cloudvps.regruhosting.ru/monitoringsi?sechID=63d37736eaaf2b2db53299b9&naimsechshort=ТН%20ВНК%20+%20ГН%20Восток%20-%20ТЭСК%20(Юг)',
    image: monitoringsiImg,
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Material
                  UI, Express, Mongo DB.`,
  },
];

export function Portfolio() {
  return (
    <Layout>
      <ul className={st.ul}>
        {sites.map(({ image, href, stack }) => (
          <li className={st.li} key={href}>
            {<CardSite image={image} href={href} stack={stack} />}
          </li>
        ))}
        {/* <li className={st.li}>
          <Card
            sx={{ maxWidth: 400 }}
            elevation={9}
            onClick={(e) => {
              window.open('https://evklid-henna.vercel.app/');
            }}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='550'
                image={evklidImg}
                alt='green iguana'
              />
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
        </li>
        <li className={st.li}>
          <Card
            sx={{ maxWidth: 400 }}
            elevation={9}
            onClick={(e) => {
              window.open('https://evklid-henna.vercel.app/');
            }}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='550'
                image={evklid2Img}
                alt='green iguana'
              />
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
        </li>
        <li className={st.li}>
          <Card
            sx={{ maxWidth: 400 }}
            elevation={9}
            onClick={(e) => {
              window.open('https://pomodoro-alpha-six.vercel.app/');
            }}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='550'
                image={pomodoroImg}
                alt='green iguana'
              />
              <CardContent sx={{ backgroundColor: '#e8e7e6' }}>
                <Typography gutterBottom variant='h5' component='div'>
                  stack
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Rechart, Material
                  UI
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li> */}
      </ul>
    </Layout>
  );
}
