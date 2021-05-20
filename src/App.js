import React from "react";
import Api from "./Api"
import Me from "./Me"

import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/course/Course"
import CourseAdd from "./components/pages/course/CourseAdd"
import CourseEdit from "./components/pages/course/CourseEdit"
import CourseList from "./components/pages/course/CourseList"
import Profile from "./components/pages/profile/Profile"
import ProfileEdit from "./components/pages/profile/ProfileEdit"
import ProfileEditAvailableHours from "./components/pages/profile/ProfileEditAvailableHours"
import ProfileEditEmail from "./components/pages/profile/ProfileEditEmail"
import ProfileEditAvatar from "./components/pages/profile/ProfileEditAvatar"
import ProfileEditEmailVerifyCode from "./components/pages/profile/ProfileEditEmailVerifyCode"
import Pay from "./components/pages/Pay"
import Appointment from "./components/pages/appointment/Appointment"
import AppointmentList from "./components/pages/appointment/AppointmentList"
import Register from "./components/pages/register/Register"
import Home from "./components/pages/home/Home"
// IMPORT

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";



class App extends React.Component {
  constructor(){
    Api.get('/user/me').then(response => {
      const user = response.data.data
      Me.setUser(user)
    })
  }
    render() {
        const { name } = this.props;
        return (
          <BrowserRouter>
            <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/appointment/list" component={AppointmentList} />
              <Route path="/appointment" component={Appointment} />
              <Route path="/course/add" component={CourseAdd} />
              <Route path="/course/edit" component={CourseEdit} />
              <Route path="/course/explore" component={CourseList} />
              <Route path="/course" component={Course} />
              <Route path="/pay" component={Pay} />
              <Route path="/user/edit/avatar" component={ProfileEditAvatar} />
              <Route path="/user/edit/availableHours" component={ProfileEditAvailableHours} />
              <Route path="/user/edit/email" component={ProfileEditEmail} />
              <Route path="/user/edit/email/verifycode" component={ProfileEditEmailVerifyCode} />
              <Route path="/user/edit" component={ProfileEdit} />
              <Route path="/user" component={Profile} />
              <Route path="/register" component={Register} />

              <Redirect to="/" />
            </Switch>
            </Wrapper>
          </BrowserRouter>

        );
    }
}

export default App;