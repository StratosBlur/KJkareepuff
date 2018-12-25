import React from 'react';
class Navigator extends React.Component {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">ขวัญใจกะหรี่ปั๊ป</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="/story">เรื่องราว <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">สินค้า</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">โปรโมชั่น</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ทำธุรกิจกับเรา</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="modal" data-target="#loginModal">เข้าสู่ระบบ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
                  <span class="fa fa-shopping-cart"></span> 
            </a>
        </li>
        </ul>
        </div>

        {/* Modal */}
        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" id="exampleModalLabel"><h5>สวัสดีค่ะ</h5><h7>กรุณาลงชื่อเข้างาน เพื่อกำเนินการต่อ
                 คุณมีบัญชีผู้ใช้งานหรือยัง <a href="/register">สมัครสมาชิก</a></h7></div>
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
      </nav>
    )
  }
}

export default Navigator