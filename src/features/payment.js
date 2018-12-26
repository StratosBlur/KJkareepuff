import React from 'react';
import axios from 'axios';

class Payment extends React.Component {
    constructor(){
        super()
        this.state = {
            orderList: [],
            total: 0,
            price: [],
            name: "",
            address: "",
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const orderList = JSON.parse(window.sessionStorage.getItem("orderList"));
        console.log(orderList);
        const price = orderList.map( order => this.calculatePrice(order) )
        this.setState({
            orderList,
            price
        })

    }

    handleChangeName(e){
        this.setState({
            name: e.target.value,
        })
    }

    handleChangeAddress(e){
        this.setState({
            address: e.target.value,
        })
    }

    handleSubmit() {
        console.log("Fetch submit")
        const url = "http://currypuffapi.tk/api/orders/add.php"
        const templeteOrderProductField = (order) => `กล่องขนาด${order.OrderProductTemplete.size} ` + ` ${order.numBox} จำนวน ประกอบไปด้วย` +
        ` อกไก่ ${ order.chicken}` + ` ฟักทอง ${order.pumpkin}` + ` อะโวคาโด ${order.avocado }` +  `แปะก๋วย ${order.gingko}` + ` ง่าดำ ${order.ngadum}` + `กล้วย ${order.banana}`
        const OrderProductField = this.state.orderList.map( order => templeteOrderProductField(order))
        
        OrderProductField.forEach(order => {
            axios.post(url, {
                OrderProduct: order,
                address: ` ${this.state.name} ${this.state.address} `
            }).then((res) => {
                console.log(res);
            })
        })
        
    }

    calculatePrice(order){
        const size  = order.OrderProductTemplete.size
        let price = 0;
        if(size  ===  1){
            price = 30.0
        }else if(size === 2){
            price = 60.0
        }else if(size === 5){
            price = 140.0
        }else{
            price = 230.0
        }

        this.setState({
            total : this.state.total + price
        })

        return price * order.numBox
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>ยืนยันการสั่งซื้อสินค้า</h2>
                        <img src="https://bit.ly/2QS3qZ2" className="img-fluid" alt="Product image"/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row">
                                <div className="col-4">
                                    <h5>รายการสินค้า</h5>
                                </div>
                                <div className="col-4">
                                    <h5>จำนวนที่สั่ง</h5>
                                </div>
                                <div className="col-4">
                                    <h5>ราคา</h5>
                                </div>
                            </div>


                            {this.state.orderList.map((order, index) => (
                                    <div className="row">
                                    <div className="col-4">
                                        <h5>กล่อง&nbsp; {order.OrderProductTemplete.size} &nbsp;ชิ้น</h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>{order.numBox}&nbsp; กล่อง</h5>
                                    </div>
                                    <div className="col-4">
                                        <h5>{ this.state.price[index] }</h5>
                                    </div>
                                </div>
                                ))
                            }

                        </div>
                        <div className="row">
                            <h5>รวม&nbsp;{this.state.total}</h5>
                        </div>
                        
                        <div className="row">
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="ชื่อ-นามสกุล"
                                        value={this.state.name} 
                                        onChange={this.handleChangeName} />
                                </div>
                                <div className="form-group">
                                    <textarea name="address" 
                                        rows="5" 
                                        cols="30" 
                                        placeholder="ที่อยู่ในการจัดส่ง"
                                        value={this.state.address}
                                        onChange={this.handleChangeAddress}>
                                    </textarea>
                                </div>
                                
                                <div className="from-group">
                                <button 
                                    className="btn btn-primary btn-lg"
                                    onClick={() => this.handleSubmit()}>
                                    ยืนยันการสั่งซื้อสินค้า
                                </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;