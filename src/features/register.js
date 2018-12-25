import React from 'react';

class Register extends React.Component {
  constructor(){
      super()
      this.state = {
        name: null,
        email: null,
        password: null,
        password2: null,
        
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // request response
    // if (response.status==200){
    //   do something here
    // }
  }
  

  render() {
    return (
      <div className="container">
      <h3>สร้างบัญชีผู้ใช้ใหม่</h3>
        <from>
            <div className="form-group">
                   <input type="text" 
                    className="form-control" 
                    placeholder="ชื่อ-นามสกุล"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    autoFocus />
            </div>
            <div className="form-group">
                   <input type="email" 
                    className="form-control" 
                    placeholder="อีเมลล์@คนไทย"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <label className="float-right">คุณมีอีเมลคนไทยแล้วหรือยัง
                      <a href="#">ลงทะเบียนอีเมล@คนไทย</a>
                    </label>
            </div>
            <div className="form-group">
                   <input type="password" 
                    className="form-control" 
                    placeholder="รหัสผ่าน"
                    value={this.state.password} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
                   <input type="password" 
                    className="form-control" 
                    placeholder="ยืนยันรหัสผ่าน"
                    value={this.state.password2} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
              <input type="checkbox" className="form-check-input"/>
              <label>ในการสมัครสมาชิก คุณยอมรับในข้อตกลง 
                  เงื่อนไข และนโยบาย ความเป็นส่วนตัวหรือไม่
              </label>
            </div>
            <div className="from-group">
              <button type="submit" className="btn btn-primary btn-lg btn-block" 
                onClick={this.handleSubmit}>สร้างบัญชี</button>
              <lable className="float-right">มีบัญชีอยู่แล้ว<a href="#">เข้าสู่ระบบ</a></lable>
            </div>
        </from>
      </div>
    );
  }
}
export default Register;


