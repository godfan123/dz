
import axios from 'axios';
const REGISTER_SUCCESS='REGISTER_SUCCESS';
const ERROR_MSG='ERROR_MSG';
const LOGIN_SUCESS='LOGIN_SUCESS';

const initState={
    msg:'',
    isAuth:false,
    user:'',
    pwd:'',
    repeatpwd:'',
    type:''

};

/* 定义一个reducer */
export function user(state=initState,action){

      switch(action.type){
          case REGISTER_SUCCESS:
              return {...state,isAuth:true,...action.data};
          case LOGIN_SUCESS:
              return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
          case ERROR_MSG:
              return {...state,isAuth:false,msg:action.msg};
          default:
              return state
      }


}

/* 定义每一个action */
function errorMsg(msg){

    return {msg,type:ERROR_MSG}

}

function loginSuccess(data){

    return {data:data,type:LOGIN_SUCESS}

}


function registerSuccess(data){

    return {data:data,type:REGISTER_SUCCESS}

}

export function login({user,pwd}){

     if(!user||!pwd){

         return errorMsg('用户名密码必须输入')
     }

     return dispatch=>{

         axios.post('/user/login',{user,pwd})
             .then(res=>{
                 if(res.status==200 && res.data.code==0){

                     dispatch(loginSuccess(res.data.data))

                 }else{

                     dispatch(errorMsg(res.data.msg))

                 }




             })


     }


}


export function register({user,pwd,repeatpwd,type}){


          if(!user || !pwd || !repeatpwd){

              return errorMsg("用户名密码必须输入")

          }else if(pwd!=repeatpwd){


              return errorMsg("密码与确认密码不一致")

          }


          return dispatch=>{

              axios("/user/register",{user,pwd,repeatpwd,type})
                  .then(res=>{
                      if(res.status==200 && res.data.code==0){

                          dispatch(registerSuccess({user,pwd,repeatpwd,type}))

                      }else{

                          dispatch(errorMsg(res.data.msg))

                      }

                  })



          }





}














