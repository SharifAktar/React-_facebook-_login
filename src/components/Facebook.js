import React, {Component } from 'react';
import FacebookLogin from 'react-facebook-login';



class LoginFacebook extends Component {
state={
    auth:false,
    name:'',
    picture:''
}
 componentClicked =()=>{
    console.log('facebook btn clicked');
}
 responseFacebook=(response)=>{
    console.log(response);
    if(response.state !== 'unkonwn')
    this.setState({
       auth:true,
       name:response.name,
       picture:response.picture.data.url 
    });
}
render(){

    let facebookData;
    this.state.auth ?
    facebookData =(
        <div>
        <img src={this.state.picture} alt={this.state.name} />

        <h1>Welcome <br/>{this.state.name}</h1> 
        </div>
    ):
    facebookData=(
        <FacebookLogin
        appId="369442580858558"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
       />
    
    );

    return(
        <>
{facebookData}
        </>
        
    );
}

}
export default LoginFacebook;