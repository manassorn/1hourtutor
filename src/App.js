import React from "react";
import Wrapper from "./components/common/Wrapper"
import Course from "./components/pages/Course"
import CourseAdd from "./components/pages/CourseAdd"
import CourseList from "./components/pages/CourseList"
import User from "./components/pages/User"
import UserEdit from "./components/pages/UserEdit"
import UserEditAvailableHours from "./components/pages/UserEditAvailableHours"
import UserEditEmail from "./components/pages/UserEditEmail"
import UserEditAvatar from "./components/pages/UserEditAvatar"
import UserEditEmailVerifyCode from "./components/pages/UserEditEmailVerifyCode"
import Pay from "./components/pages/Pay"
import Appointment from "./components/pages/Appointment"
import AppointmentList from "./components/pages/AppointmentList"
import Home from "./components/pages/Home"
// IMPORT

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";



class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
         <Wrapper>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/appointment/list" component={AppointmentList} />
                <Route path="/appointment" component={Appointment} />
                <Route path="/course/add" component={CourseAdd} />
                <Route path="/course/explore" component={CourseList} />
                <Route path="/course" component={Course} />
                <Route path="/pay" component={Pay} />
                <Route path="/user/edit/avatar" component={UserEditAvatar} />
                <Route path="/user/edit/availableHours" component={UserEditAvailableHours} />
                <Route path="/user/edit/email" component={UserEditEmail} />
                <Route path="/user/edit/email/verifycode" component={UserEditEmailVerifyCode} />
                <Route path="/user/edit" component={UserEdit} />
                <Route path="/user" component={User} />

                <Redirect to="/" />
            </Switch>
          </BrowserRouter>
          
         </Wrapper>
        );
    }
}

export default App;