import React from 'react';
import st from './cardsite.module.css';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  href: string;
  image: string;
  stack: string;
  github: string;
}
export function CardSite({ href, image, stack, github }: Props) {
  return (
    <Card sx={{ width: 400 }} elevation={9}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='550'
          image={image}
          alt='green iguana'
          onClick={(e) => {
            window.open(href);
          }}
        />
      </CardActionArea>
      <CardContent sx={{ backgroundColor: '#e8e7e6', height: '100px' }}>
        {/* <Typography variant='body2' color='text.secondary'>
            <Typography gutterBottom variant='h5' component='span'>
              Stack:
            </Typography>
            {' ' + stack}
          </Typography> */}
        <p className={st.p}>
          <b>Stack: </b>
          {stack}
        </p>
        <a className={st.aGithub} href={github} target='_blank'>
          Github
        </a>
      </CardContent>
    </Card>
  );
}
