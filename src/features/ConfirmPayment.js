import React from 'react';
import Login from './login'
class ConfirmPayment extends React.Component {
  constructor(){
      super()
      this.state = {
        payment_id: null,
        date: null,
        time: null,
        amount: null,
        slip: null
        
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
      <h3>แจ้งผลการโอนเงิน</h3>
        <from>
            <div className="form-group">
                   <input type="text" 
                    className="form-control" 
                    placeholder="หมายเลขคำสั่งซื้อ"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    autoFocus />
            </div>
            <div className="form-group">
                   <input type="date" 
                    className="form-control" 
                    placeholder="วันที่โอน"
                    value={this.state.amount} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
                   <input type="time" 
                    className="form-control" 
                    placeholder="เวลาที่โอน"
                    value={this.state.date} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
                   <input type="number" 
                    className="form-control" 
                    placeholder="จำนวนเงิน"
                    value={this.state.amount} 
                    onChange={this.handleChange}
                    />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-8">
                  <input type="text" 
                    className="form-control" 
                    placeholder="สลิปการโอนเงิน"
                    value={this.state.slip} 
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-lg btn-block" 
                  onClick={this.handleSubmit}>อัพโหลดภาพ</button>
                </div>
              </div>
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
export default ConfirmPayment;


