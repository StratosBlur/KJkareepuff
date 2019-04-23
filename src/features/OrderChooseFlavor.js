import React from 'react';
import box1 from '../assets/img/Box-theme-pink.png'
import box2 from '../assets/img/Box-theme-blue.png'
import box3 from '../assets/img/Box-theme-purple.png'

export default class OrderChooseFlavor extends React.Component {

	render() {

		return (
			<div className="card card-body">
				<h4>สั่งซื้อสินค้า</h4>
				<br />
				<br />
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<table className="table table-condensed">
							<tr>
								<td className="number-box-text">
									<strong>ขนาดกล่อง</strong>
								</td>
								<td>
									<div className="row">
										กล่องความจุ&nbsp;{this.props.OrderProductTemplete.size}&nbsp;ชิ้น
									</div>
								</td>
							</tr>
						
							<tr>
								<td className="number-box-text">
									<strong>รูปแบบกล่อง</strong>
								</td>
							
								<td>
								<div className="row">
								<div className="col-lg-3 col-md-3 col-sm-3 ">
									<div className="grid-two imageandtext">
										<div className="imageandtext image_grid">
											<label htmlFor="box1">
												<img className="img-style-select" src={box1} alt="noimage" />
											</label>
											<input id="box1" name="boxStyle" type="radio" onChange={() => { this.props.handleChangeStyle(1) }} />
											<div className="caption">แบบที่ 1</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-3 ">
									<div className="grid-two imageandtext">
										<div className="imageandtext image_grid">
											<label htmlFor="box2">
												<img className="img-style-select" src={box2} alt="noimage" />
											</label>
											<input id="box2" name="boxStyle" type="radio" onChange={() => { this.props.handleChangeStyle(2) }} />
											<div className="caption">แบบที่ 2</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-3 ">
									<div className="grid-two imageandtext">
										<div className="imageandtext image_grid">
											<label htmlFor="box3">
												<img className="img-style-select" src={box3} alt="noimage" />
											</label>
											<input id="box3" name="boxStyle" type="radio" onChange={() => { this.props.handleChangeStyle(3) }} />
											<div className="caption">แบบที่ 3</div>
										</div>
									</div>
								</div>
								</div>
								</td>
							</tr>
						
						<tr>
							<td className="number-box-text">
								<strong>เลือกไส้</strong>
							</td>
						<td>
						<div className="row flavor-line">
							<div className="flavor-text">
								อกไก่
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`chicken`) }}> + </button>
									<div className="number-piece">{this.props[`chicken`]} </div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`chicken`) }}> - </button>
								</div>
							</div>
						</div>
						
						<div className="row flavor-line">
							<div className="flavor-text" >
								ฟักทอง
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`pumpkin`) }}> + </button>
									<div className="number-piece">{this.props[`pumpkin`]}  </div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`pumpkin`) }}> - </button>
								</div>
							</div>
						</div>
						
						<div className="row flavor-line">
							<div className="flavor-text" >
								อะโวคาโด
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`avocado`) }}> + </button>
									<div className="number-piece">{this.props[`avocado`]}  </div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`avocado`) }}> - </button>
								</div>
							</div>
						</div>
						
						<div className="row flavor-line">
							<div className="flavor-text" >
								แปะก๊วย
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`gingko`) }}> + </button>
									<div className="number-piece">{this.props[`gingko`]}  </div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`gingko`) }}> - </button>
								</div>
							</div>
						</div>
						
						<div className="row flavor-line">
							<div className="flavor-text" >
								งาดำ
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`ngadum`) }}> + </button>
									<div className="number-piece">{this.props[`ngadum`]}  </div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`ngadum`) }}> - </button>
								</div>
							</div>
						</div>
						
						<div className="row flavor-line">
							<div className="flavor-text" >
								กล้วยหอม
                            </div>
							<div className="text-center">
								<div className="row flavor-number">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddflavor(`banana`) }}> + </button>
									<div className="number-piece">{this.props[`banana`]}</div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`banana`) }}> - </button>
								</div>
							</div>
						</div>
						</td>
						</tr>
						
						
							<tr>
							<td className="number-box-text">
								<strong>จำนวนกล่อง</strong>
							</td>
							<td>
								<div className="row">
									<button className="btn btn-append" onClick={() => { this.props.handleChangeAddNumberOfBox() }}> + </button>
									<div className="number-piece">{this.props[`numBox`]}</div>
									<button className="btn btn-append" onClick={() => { this.props.handleChangeRemoveNumberOfBox() }}> - </button>
								</div>						
							</td>
							</tr>
						</table>


						<div className="payment-option">
							<div className="row " align="center">
								<a href="/ชำระเงิน" ><button className="btn btn-info" onClick={() => this.props.handlePayment()}>ชำระเงิน</button></a>
								<button type="button" className="btn btn-success" data-toggle="modal" data-target="#cart-notify"
								dataonClick={() => this.props.handleAddToCart()}>ใส่ตะกร้า</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="cart-notify" role="dialog">
					<div className="modal-dialog modal-sm modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-body">
								<p>บรรจุสินค้าลงตะกร้าเรียบร้อยค่ะ</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default button-booking" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
