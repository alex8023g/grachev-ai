import React from 'react';
import st from './certificates.module.css';
import { Layout } from '../Layout';
import nodeJsImg from '../img/CertSBNodeJS.png';
import jsAdvImg from '../img/CertSBJSAdvanced.png';
import reactJsImg from '../img/CertSBReactJS.png';
import Paper from '@mui/material/Paper';

export function Certificates() {
  return (
    <Layout>
      <ul className={st.ul}>
        {[reactJsImg, jsAdvImg, nodeJsImg].map((cert) => (
          <li>
            {/* <Paper elevation={7} sx={{ borderRadius: 5 }}> */}
            <img src={cert} alt='' />
            {/* </Paper> */}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
