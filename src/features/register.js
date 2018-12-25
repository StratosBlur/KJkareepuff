import React from 'react';
import axios from 'axios';
import Login from './login';

class Register extends React.Component {
  constructor(){
      super()
      this.state = {
        name: null,
        email: null,
        tel: null,
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

  handleSubmit = async (event) => {
  
    const customer = new URLSearchParams();
    customer.append('CustomerName', this.state.name);
    customer.append('CustomerEmail', this.state.email);
    customer.append('CustomerPhone', this.state.tel);
    customer.append(' CustomerPassword', this.state.password);
    customer.append(' CustomerPassword2', this.state.password2);
    axios({
      method: 'post',
      url: 'http://currypuffapi.tk/api/customer/register.php',
      data: customer
    });
  }  

  render() {
    return (
      <div className="container">
      <h3>สร้างบัญชีผู้ใช้ใหม่</h3>
        <from>
            <div className="form-group">
                   <input type="text" 
                    className="form-control"
                    name="name" 
                    placeholder="ชื่อ-นามสกุล"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    autoFocus />
            </div>
            <div className="form-group">
                   <input type="email" 
                    className="form-control"
                    id="email"
                    name="email" 
                    placeholder="อีเมลล์@คนไทย"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <label className="float-right">คุณมีอีเมลล์คนไทยแล้วหรือยัง
                      <a href="#">ลงทะเบียนอีเมล@คนไทย</a>
                    </label>
            </div>
            <div className="form-group">
                   <input type="tel" 
                    className="form-control"
                    id="tel"
                    name="tel" 
                    placeholder="เบอร์โทรศัพท์"
                    value={this.state.tel} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
                   <input type="password" 
                    className="form-control"
                    id="password"
                    name="password" 
                    placeholder="รหัสผ่าน"
                    value={this.state.password} 
                    onChange={this.handleChange}
                    />
            </div>

            <div className="form-group">
                   <input type="password" 
                    className="form-control"
                    id="password2"
                    name="password2" 
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
              <lable className="float-right">มีบัญชีอยู่แล้ว<a href="#" data-toggle="modal" data-target="#loginModal">เข้าสู่ระบบ</a></lable>
            </div>
        </from>
        <Login/>
      </div>
    );
  }
}
export default Register;


