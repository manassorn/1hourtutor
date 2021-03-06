import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import Switcher from '../../common/Switcher'

import CalendarPartOfDay from '../../common/CalendarPartOfDay'
import CalendarCarousel from '../../common/CalendarCarousel'

class ProfileEditAvailableHours extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        availability: undefined,
        isRecurring: true,
        recurringHex: undefined
      }
      this.recurringCalendar = React.createRef()
      
      this.onSwitcherChange = this.onSwitcherChange.bind(this)
      this.saveRecurring = this.saveRecurring.bind(this)
      
    }

    componentDidMount() {
      const that = this
      Api.get('/user/me')
        .then(response => {
        const availability = response.data.data.availability
        const recurringHex = availability.recurringHex
        const isRecurring = availability.isRecurring
        //this.refs.calendar.updateActiveHours(hours)
        that.setState({recurringHex, isRecurring})
        });
    }
    
    onSwitcherChange(on) {
      setTimeout(() => {
       this.setState({isRecurring:on})
      },150)      
    }
    
    saveRecurring(recurringHex) {
      const isRecurring = this.state.isRecurring
      Api.post('/user/me/availability', {availability: {recurringHex,isRecurring}}).then(() => {
        //todo
      })
    }
    
    render() {
      return <div className="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="แก้ไขเวลาที่สะดวกสอน"/>
      
      <div class="btn-group-round my-3"> 
            
        <div class="btn-group d-flex"> 

          <button type="button" class="btn btn-white w-75">เหมือนกันทุกอาทิตย์</button> 
            <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javaScript:;">ddd</a> 

            </div>
          <button type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span> 
                </button> 
        </div> 
      </div>
      
      <div>
      <Switcher onChange={this.onSwitcherChange} checked={this.state.isRecurring} label="เวลาเดิมทุกอาทิตย์"/>
      </div>
      
      {this.state.isRecurring && <CalendarPartOfDay layer1Hex={this.state.recurringHex} ref={this.recurringCalendar} onSaved={hex => this.saveRecurring(hex)}/>}
      
      {!this.state.isRecurring && <CalendarCarousel availability={this.state.availability}/>}
      
      <button className="mt-3 mb-5 btn btn-primary btn-block" onClick={this.saveAvailableHours}>บันทึก</button>
      </div>
    }
}
export default ProfileEditAvailableHours