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
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h7 class="modal-title" id="exampleModalLabel">สวัสดีค่ะ</h7>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <input type="email" 
                      class="form-control" 
                      id="email"
                      placeholder="อีเมลล์@คนไทย"
                      value={this.state.email} 
                      onChange={this.handleChange}/>
                  </div>
                  <div class="form-group">
                    <input type="password" 
                      class="form-control" 
                      id="password"
                      placeholder="รหัสผ่าน"
                      value={this.state.password} 
                      onChange={this.handleChange}/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary-block" onClick={this.handleSubmit}>เข้าสู่ระบบ</button>
                <h6 className="float-right"><a href="#">ลืมรหัสผ่าน</a></h6>
              </div>
            </div>
          </div>
        </div>
      </nav>


    )
  }
}

export default Navigator