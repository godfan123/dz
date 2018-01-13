import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
      /* 获取用户信息
      * 是否登入
      *现在的URL地址 login是不需要跳转的
      *用户的type
      *用户是否完善信息
      * */

      const publicList=['/login','/register'];
      const pathname=this.props.location.pathname;
      if(publicList.indexOf(pathname)>-1){

           return null
      }
        axios.get('/user/info').then(function(res){
            if(res.status==200){
                if(res.data.code==0){


                }else{

                    this.props.history.push('/login')
                }

                console.log(res.data)
            }
        })

    }

    render(){
        return (
            <div>
            判断跳转
            </div>

        )

    }


}


export default AuthRoute
