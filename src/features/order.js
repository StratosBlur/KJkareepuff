import React from 'react';
import OrderModal from './orderModal'

export default class Order extends React.Component {
  render() {
    return (
        <div className="container">
            <h2>เลือกขนาดที่คุณต้องการ</h2>
            <br />
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <img className="img-box-select" src="https://lh4.googleusercontent.com/NBKrFwnzmzAyr9WA3cTimlMYCQXLkmjbFjXmIRgJl-hOnAc71c0p1ao0V4GQ6UNnALdfTU0rj4rdSSslZCph=w1324-h915" 
                        data-toggle="modal" data-target="#choose-flavor" onChange={this.toggleChange}/>
                </div>   
   
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <img className="img-box-select" src="https://lh3.google.com/u/0/d/1s6qv7yowXIQh4YNORvIWngGmsYS38b0k=w1920-h915-iv1" 
                        data-toggle="modal" data-target="#choose-flavor" onChange={this.toggleChange}/>
                </div>   

                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412146_346510252741800_8548180281452920832_n.png?_nc_cat=109&_nc_ht=scontent.fbkk7-2.fna&oh=545309a97bf9e170ab5fd78723660b2d&oe=5C9381E8" 
                        data-toggle="modal" data-target="#choose-flavor" onChange={this.toggleChange}/>
                </div>  

                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48417776_525187834651070_488155984179494912_n.png?_nc_cat=102&_nc_ht=scontent.fbkk7-2.fna&oh=f95c880baa2c477adabd555c079d9b30&oe=5CA208EF" 
                        data-toggle="modal" data-target="#choose-flavor" onChange={this.toggleChange}/>
                </div>  

            </div>

            <div className="modal fade" id="choose-flavor" role="dialog">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                            <OrderModal />

                        <div class="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss="modal">ชำระเงิน</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal">ใส่ตะกร้า</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  }
  