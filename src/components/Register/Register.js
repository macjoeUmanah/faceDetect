import React from 'react';


class Register extends React.Component{


  constructor(props){

    super();

    this.state={

      
      name:'',
      email:'',
      password:''
    }
  }

  onEmailChange=(event)=>{


    this.setState({email:event.target.value});


  }


  onPasswordChange=(event)=>{


    this.setState({password:event.target.value});

  }

 onNameChange=(event)=>{

  this.setState({name:event.target.value});


 }


 onRegister=()=>{

  fetch('https://lit-inlet-91556.herokuapp.com/register',{

    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
     
      "name":this.state.name,
      "email":this.state.email,
      "password":this.state.password
    })



  }).then(response=>response.json()).then(user=>{


    if(user.id){
      this.props.loadUser(user);
      console.log(user);

      this.props.onRouteChange('home');
    }



  });
 }



  render(props){

    const {onRouteChange}=this.props;
    return (
<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">

<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="">
      <input className="b f1 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onRegister} type="submit" value="Register" />
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onRouteChange('signin')} href="#0" className="f6 link dim black db">Sign In</p>
    </div>
  </div>
</main>
</article>

  );
}




  }



	

export default Register;