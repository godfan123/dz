import React from 'react';
import ReactDom from 'react-dom';

import BannerAd from '../components/Category/index';
import Header from '../components/Header/index';
import './config';





ReactDom.render(

         <div>
             <Header info="东莞"></Header>
             <BannerAd></BannerAd>

         </div>

        ,

    document.getElementById('mainContainer')
);





