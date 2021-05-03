import React from "react";
import Api from '../../Api'
import Separator from '../common/Separator'
import SimpleTitle from '../common/SimpleTitle'

class Register extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
    }
    
    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }


    render() {
        return <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
      <SimpleTitle title='ลงทะเบียน' />
       
      <div class="p-3">
<div class="fb-login-button" data-width="100%" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>
        <button className="btn btn-primary btn-block">login with facebook</button>
        <button className="btn btn-primary btn-block">login with Line</button>
        
        <div className="my-3">
        <Separator text="หรือ"/>
        </div>

        
    <form class="needs-validation" novalidate>
      <div class="form-group mt-2"> 
       <label>อีเมล</label> 
       <input id="email" type="email" class="form-control form-control-lg" placeholder="example@user.com" value="manassorn@gmail.com" required />
       <div class="invalid-feedback">
         อีเมลไม่ถูกต้อง
       </div>
      </div> 
      <button id="submit-email-btn" type="button" class="btn btn-primary btn-lg btn-block">ยืนยันอีเมล</button>
      <a href="authentication-login.html" class="btn btn-link btn-block">เข้าสู่ระบบ</a> 
    </form>
       
      </div>
       
       
     </div> 

    }
}
export default Register;