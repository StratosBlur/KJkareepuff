import React from 'react';
import Login from './login'
class Partner extends React.Component {
  constructor(){
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
    // request response
    // if (response.status==200){
    //   do something here
    // }
  }
  

  render() {
    return (
      <div className="container">
      <img src="https://bit.ly/2Af7gky" 
            className="img-fluid" alt="cover image"/>
      <br/><br/>
      <h3>ทำไม</h3>
      <div className="row">
        <div className="col-4">
          <img src="https://bit.ly/2GDZHcF" 
            className="img-fluid" alt="cover image"/>
        </div>
        <div className="col-4">
          <img src="https://bit.ly/2QPubx9" 
            className="img-fluid" alt="cover image"/>
        </div>
        <div className="col-4">
          <img src="https://bit.ly/2EMXb2d" 
            className="img-fluid" alt="cover image"/>
        </div>
      </div>
      <br/><br/>
      
      <h3>มาร่วมธุรกิจกับเรา</h3>
      <h4>ติดต่อเรา</h4>
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
                    <label className="float-right">คุณมีอีเมลคน.ไทยแล้วหรือยัง
                      <a href="#">ลงทะเบียนอีเมล@คน.ไทย</a>
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
          </from>        
          <Login/>
      </div>
    );
  }
}
export default Partner;


