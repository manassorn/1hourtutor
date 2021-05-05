import React from "react";
import Api from '../../../Api'
import Separator from '../../common/Separator'
import FormValidation from '../../common/FormValidation'
import SimpleTitle from '../../common/SimpleTitle'

class Register extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
      this.form = React.createRef()
      this.validate = this.validate.bind(this)
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
    
    validate() {
      if(this.pwd.value !== this.pwd2.value) {
        this.form.current.fail(this.pwd2, "notmatch")
        return false
      } else {
        this.form.current.ok(this.pwd2)
        return true
      }
    }


    render() {
        return <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
      <SimpleTitle title='ลงทะเบียน' />
       
      <div class="p-3">
      <div class="fb-login-button" data-width="100%" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"></div>
        <button className="mt-3 btn btn-primary btn-block">login with Line</button>
        
        <div className="my-3">
        <Separator text="หรือ"/>
        </div>

        
    <FormValidation ref={this.form} validate={this.validate}>
      <div class="form-group mt-2"> 
       <label>อีเมล</label> 
       <input id="email" type="email" class="form-control" placeholder="example@user.com" required />
       <div class="invalid-feedback">
         โปรดกรอกอีเมลให้ถูกต้อง
       </div>
      </div> 
      <div class="form-group mt-2"> 
       <label>ชื่อ</label> 
       <input id="name" type="text" class="form-control" required />
       <div class="invalid-feedback">
         โปรดกรอกชื่อ
       </div>
      </div>
      <div class="form-group mt-2"> 
       <label>รหัสผ่าน</label> 
       <input ref={ele => this.pwd = ele} id="pwd" type="password" class="form-control" required />
       <div class="invalid-feedback">
         โปรดกรอกรหัสผ่าน
       </div>
      </div>
      <div class="form-group mt-2"> 
       <label>ยืนยันรหัสผ่าน</label> 
       <input ref={ele => this.pwd2 = ele} id="pwd2" type="password" class="form-control" aria-describedby="pwdMismatch" onChange={this.validate} required />
       <div class="invalid-feedback">
         โปรดยืนยันรหัสผ่านให้ถูกต้อง
       </div>
      </div>
      <button id="submit-email-btn" type="submit" class="btn btn-primary btn-block">ดำเนินการต่อ</button>
      <a href="authentication-login.html" class="btn btn-link btn-block">เข้าสู่ระบบ</a> 
    </FormValidation>
       
      </div>
      
      
       
     </div> 

    }
}
export default Register;