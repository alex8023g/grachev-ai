import Typography from '@mui/material/Typography';
import React from 'react';
import st from './portfolio.module.css';
import { Layout } from '../Layout';
import Paper from '@mui/material/Paper';
import pomodoroImg from '../img/pomodoro.png';
import evklidImg from '../img/evklid.png';
import monitoringsiImg from '../img/monitoringsi.png';
import coinImg from '../img/coin.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardSite } from '../CardSite';

const sites = [
  {
    href: 'https://evklid-henna.vercel.app/',
    image: evklidImg,
    stack: 'HTML, CSS, Swiper.',
    github: 'https://github.com/alex8023g/evklid',
  },
  {
    href: 'https://pomodoro-alpha-six.vercel.app/',
    image: pomodoroImg,
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Rechart, Material
                  UI.`,
    github: 'https://github.com/alex8023g/pomodoro',
  },
  {
    href: 'https://80-78-248-80.cloudvps.regruhosting.ru/monitoringsi?sechID=63d37736eaaf2b2db53299b9&naimsechshort=ТН%20ВНК%20+%20ГН%20Восток%20-%20ТЭСК%20(Юг)',
    image: monitoringsiImg,
    stack: `React, Typescrypt, React-Router, Zustand, Drag'n'Drop, Material UI, Express, Mongo DB.`,
    github: 'https://github.com/alex8023g/monitoringSi',
  },
  {
    href: 'https://coin-front-end.vercel.app',
    image: coinImg,
    stack: `React, Typescrypt, React-Router, Material UI, Recharts, Express, WebSocket.`,
    github: 'https://github.com/alex8023g/coin-front-end',
  },
];

export function Portfolio() {
  return (
    <Layout>
      <ul className={st.ul}>
        {sites.map(({ image, href, stack, github }) => (
          <li key={href}>
            {<CardSite image={image} href={href} stack={stack} github={github} />}
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
