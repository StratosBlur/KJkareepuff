import React from 'react';

class Login extends React.Component {
  constructor(){
      super()
      this.state = {
        email: null,
        password: null,
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
      <h3>สวัสดีค่ะ</h3>
      <label>กรุณาลงชื่อเข้าใช้งาน เพื่อดำเนินการต่อ</label>
      <label>คุณมีบัญชีผู้ใช้งานหรือยัง<a href="/register"> สมัครสมาชิก</a></label>
        <from>
            
            <div className="form-group">
                   <input type="email" 
                    className="form-control" 
                    placeholder="อีเมลล์@คนไทย"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
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
              <button type="submit" className="btn btn-primary btn-lg btn-block" 
                onClick={this.handleSubmit}>เข้าสู่ระบบ</button>
              <lable className="float-right"><a href="#">ลืมรหัสผ่าน</a></lable>
            </div>
        </from>
      </div>
    );
  }
}
export default Login;


