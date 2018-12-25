import React from 'react';
import axios from 'axios';

class Payment extends React.Component {
    constructor(){
        super()
        this.state = {
            name: null,
            address: null,
            tel:null,
        }
    }
    // async componentWillMount(){
    //     await this.getProduct()
    // }
    // async getProduct(){
    //     console.log('getProduct')
    //     const res = await axios.get('http://currypuffapi.tk/api/products/all.php');
    //     console.log(res.data);
    // }
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

                            <div className="row">
                                <div className="col-4">
                                    <h5>กล่อง 1 ชิ้น</h5>
                                </div>
                                <div className="col-4">
                                    <h5>1 กล่อง</h5>
                                </div>
                                <div className="col-4">
                                    <h5>30.0</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5>กล่อง 1 ชิ้น</h5>
                                </div>
                                <div className="col-4">
                                    <h5>1 กล่อง</h5>
                                </div>
                                <div className="col-4">
                                    <h5>50.0</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h5>กล่อง 1 ชิ้น</h5>
                                </div>
                                <div className="col-4">
                                    <h5>1 กล่อง</h5>
                                </div>
                                <div className="col-4">
                                    <h5>60.0</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h5>รวม</h5>
                        </div>
                        
                        <div className="row">
                            <form>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="ชื่อ-นามสกุล"
                                        value={this.state.name} 
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <textarea name="address" 
                                        rows="5" 
                                        cols="30" 
                                        placeholder="ที่อยู่ในการจัดส่ง"
                                        value={this.state.address}
                                        onChange={this.handleChange}>
                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <input type="tel" 
                                        className="form-control" 
                                        placeholder="ชื่อ-นามสกุล"
                                        value={this.state.tel} 
                                        onChange={this.handleChange} />
                                </div>
                                <div className="from-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" 
                                    onClick={this.handleSubmit}>ยืนยันการสั่งซื้อสินค้า</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;