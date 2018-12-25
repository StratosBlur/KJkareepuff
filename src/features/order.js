import React from 'react';
import OrderModal from './orderModal'

export default class Order extends React.Component {
  render() {
    return (
        <div className="container">
            <h2>เลือกขนาดที่คุณต้องการ</h2>
            <br />
            <div className="row">
                {/* {this.state.serviceArray.filter((service,index) => service.name !== 'return' && service.name !== 'pickUp')
                .map((service ,index) =>  */}
                <div className="col-lg-4 col-md-4 col-sm-4 product-preview">
                    <img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                        &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" 
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
  