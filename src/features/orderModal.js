import React from 'react';

export default class OrderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChooseBox: false,
            flavorArray: [],
            numberArray: []
        }
        this.toggleChange = this.toggleChange.bind(this)
    }

    handleChange  = (index) => (event)=> {
        const flavorArray = this.state.flavorArray
        let index
    
        if (event.target.checked) {
            flavorArray.push(event.target.value)
        } else {
            index = flavorArray.indexOf(event.target.value)
            flavorArray.splice(index, 1)
        }
    
        this.setState({ flavorArray: flavorArray })
        console.log(this.state.flavorArray)
    }
    
    toggleChange = (index) => (event)=> {
        const flavorArray = this.state.flavorArray
        let sindex
    
        if (event.target.checked) {
            flavorArray.push(event.target.value,index)
        } else {
            sindex = flavorArray.indexOf(event.target.value,index)
            flavorArray.splice(sindex)
        }
    
        this.setState({ flavorArray: flavorArray })
        console.log(this.state.flavorArray)
    }

    render() {
        return (
            <div className="modal-body">
                <h4>สั่งซื้อสินค้า</h4>
                <br/>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 img-ordered-box">
                        <img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                            &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            นาฏยศาลาชินบัญชรคาแร็คเตอร์เซอร์วิส 
                            เก๋ากี้ถูกต้องแกรนด์ดีพาร์ทเมนท์ คอร์รัปชั่น 
                            พันธุวิศวกรรมกฤษณ์สต็อกโอเวอร์ 
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <label for="box-style">รูปแบบกล่อง</label>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <div class="grid-two imageandtext">
                                    <div class="imageandtext image_grid">
                                        <label for="box1">
                                        <img className="img-style-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                            &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                                        </label>
                                        <input id="box1" type="checkbox" value="box1" />
                                        <div class="caption"></div>
                                    </div>
                                </div>
                            </div>   
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <div class="grid-two imageandtext">
                                    <div class="imageandtext image_grid">
                                        <label for="box2">
                                        <img className="img-style-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                            &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                                        </label>
                                        <input id="box2" type="checkbox" value="box2" />
                                        <div class="caption"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <div class="grid-two imageandtext">
                                    <div class="imageandtext image_grid">
                                        <label for="box3">
                                        <img className="img-style-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412075_567016597105618_693586541984874496_n.jpg?_nc_cat=102
                                            &_nc_ht=scontent.fbkk7-2.fna&oh=3f38b9fc24db88c0f55080f6c202ab42&oe=5C99E90C" />
                                        </label>
                                        <input id="box3" type="checkbox" value="box3" />
                                        <div class="caption"></div>
                                    </div>
                                </div>
                            </div> 
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 ">
                                <label>เลือกไส้</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="chicken" onChange={this.toggleChange(1)} /> อกไก่
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(1)} />
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="pumpkin" onChange={this.toggleChange(2)} /> ฟักทอง
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(2)} />
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="avocado" onChange={this.toggleChange(3)} /> อะโวคาโด
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(3)} />
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="gingko" onChange={this.toggleChange(4)} /> แปะก๊วย
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(4)} />
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="ngadum" onChange={this.toggleChange(5)} /> งาดำ
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(5)} />
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                <input type="checkbox" value="banana" onChange={this.toggleChange(6)} /> กล้วยหอม
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <input className="number-piece" type="number" min="0" max="12" onChange={this.handleChange(6)} />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <label>จำนวนกล่อง</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <input className="number-box" type="number" min="1" max="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }