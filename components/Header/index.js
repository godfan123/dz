import React from 'react';
import {Icon} from 'antd-mobile';
import './style.css';
import user from './images/user.png';
import 'whatwg-fetch';

class Header extends React.Component {

    handleClick(){

          var result=fetch('/api',{
              credentials:'include',
              header:{
                  'Accept':'application/json,text/plain,*/*'

              }

          });

          result.then(res=>{

                return res.text()
          }).then(text=>{
              console.log(text)
          });

        /* /api在mock文件夹中 想点击下拉三角形按钮时  在页面输出结果
         * 访问 http://localhost:3000/api 这个接口 可以输出test data 11111111111111
        *  点击按钮 出错了 Error occured while trying to proxy to: localhost:882/api
        *  代理我也在webpack.config.js中配置好了 就是一直报错？
        *
        *
        *
        * */


    }

    render() {

        return (

                <div className="header">
           <span className="city">
             <p><span style={{marginTop:'2px'}}>{this.props.info}</span>
                 <Icon type="down" className="down" onClick={this.handleClick.bind(this)} />

             </p>
           </span>
                    <input type="text" placeholder="请输入"/>
                    <span className="user">
                     <img src={user} />
                       </span>
                </div>

        )


    }


}


export default Header