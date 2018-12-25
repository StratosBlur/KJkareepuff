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
    console.log(event.target.name)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("กดแล้วจ้า")
    // request response
    // if (response.status==200){
    //   do something here
    // }
  }
  

  render() {
    return (
      <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title" id="exampleModalLabel">
              <h5>สวัสดีค่ะ</h5>
              <h7>กรุณาลงชื่อเข้าใช้งานเพื่อดำเนินการต่อ คุณมีบัญชีผู้ใช้งานหรือยัง? 
              <a href="/register">สมัครสมาชิก</a>
              </h7>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input type="email" 
                  className="form-control" 
                  id="email"
                  placeholder="อีเมลล์@คนไทย"
                  value={this.state.email} 
                  onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <input type="password" 
                  className="form-control" 
                  id="password"
                  placeholder="รหัสผ่าน"
                  value={this.state.password} 
                  onChange={this.handleChange}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handleSubmit}>เข้าสู่ระบบ</button>
          </div>
          <h6 className="float-right"><a href="#">ลืมรหัสผ่าน</a></h6>
        </div>
      </div>
    </div>
    );
  }
}
export default Login;


