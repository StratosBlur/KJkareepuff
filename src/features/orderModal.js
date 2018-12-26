import React from 'react';

export default class OrderModal extends React.Component {
    constructor(props) {
        super(props);
        
        console.log(this.props);
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
                                        <input id="box1" type="checkbox" onChange={ () => {this.props.handleChangeStyle(`1`)}}/>
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
                                        <input id="box2" type="checkbox" onChange={ () => {this.props.handleChangeStyle(`2`)}}/>
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
                                        <input id="box3" type="checkbox" onChange={ () => {this.props.handleChangeStyle(`3`)}}/>
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
                                อกไก่
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`chicken`)}}> + </button>
                                    <div className="number-piece">{this.props[`chicken`]} </div>
                                    <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveflavor(`chicken`)}}> - </button>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                ฟักทอง
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`pumpkin`)}}> + </button>
                                    <div className="number-piece">{this.props[`pumpkin`]}  </div>
                                    <button type="button"class="btn btn-append"onClick={() => {this.props.handleChangeRemoveflavor(`pumpkin`)}}> - </button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                อะโวคาโด
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`avocado`)}}> + </button>
                                    <div className="number-piece">{this.props[`avocado`]}  </div>
                                    <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveflavor(`avocado`)}}> - </button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                แปะก๊วย
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`gingko`)}}> + </button>
                                    <div className="number-piece">{this.props[`gingko`]}  </div>
                                <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveflavor(`gingko`)}}> - </button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                งาดำ
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`ngadum`)}}> + </button>
                                    <div className="number-piece">{this.props[`ngadum`]} </div>
                                <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveflavor(`ngadum`)}}> - </button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-5">                                      
                                กล้วยหอม
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddflavor(`banana`)}}> + </button>
                                    <div className="number-piece">{this.props[`banana`]}  </div>
                                <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveflavor(`banana`)}}> - </button>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 product-preview">
                                <label>จำนวนกล่อง</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <div>
                                    <button type="button" onClick={() => {this.props.handleChangeAddNumberOfBox()}}> + </button>
                                    <div className="number-piece">{this.props[`numBox`]}</div>
                                <button type="button"class="btn btn-append" onClick={() => {this.props.handleChangeRemoveNumberOfBox()}}> - </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }