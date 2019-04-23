import React from 'react';
import Login from './login';
import coverPartner from '../assets/img/cover-kareepuff.jpg';
class Partner extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      email: null,
      password: null,
      tel: null,
      line: null

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
  }


  render() {
    return (
      <div className="container">
        <img src={coverPartner}
          className="img-fluid" alt="coverimage" />
        <br /><br />
        <br /><br />

        <h3>มาร่วมธุรกิจกับเรา</h3>
        <h4>ติดต่อเรา</h4>
        <br /><br />
        <br /><br />
        <div className="partner-form">
        <form>
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
            <label className="float-right">คุณมีอีเมลคน.ไทยแล้วหรือยัง
                      <a href="https://xn--42c6b.xn--o3cw4h/">ลงทะเบียนอีเมล@คน.ไทย</a>
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
            <input type="tel"
              className="form-control"
              placeholder="เบอร์โทร"
              value={this.state.tel}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="ไลน์"
              value={this.state.line}
              onChange={this.handleChange}
            />
          </div>

          <div className="from-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block"
              onClick={this.handleSubmit}>ยืนยัน</button>
          </div>
        </form>
        </div>
        <Login />
      </div>
    );
  }
}
export default Partner;


