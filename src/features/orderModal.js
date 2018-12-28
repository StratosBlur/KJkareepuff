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
				<br />
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="row">
							นาฏยศาลาชินบัญชรคาแร็คเตอร์เซอร์วิส
							เก๋ากี้ถูกต้องแกรนด์ดีพาร์ทเมนท์ คอร์รัปชั่น
							พันธุวิศวกรรมกฤษณ์สต็อกโอเวอร์
                        </div>
						<br />

						<div className="row">
							<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
								<label for="box-style">รูปแบบกล่อง</label>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
								<div class="grid-two imageandtext">
									<div class="imageandtext image_grid">
										<label for="box1">
											<img className="img-style-select" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.15752-9/49087675_304827590155183_401384076998606848_n.png?_nc_cat=100&_nc_ht=scontent.fbkk7-3.fna&oh=caf35a1071d03cd25d8a6d7d0e0ee995&oe=5C903306" alt="noimage" />
										</label>
										<input id="box1" type="checkbox" onChange={() => { this.props.handleChangeStyle(`1`) }} />
										<div class="caption"></div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
								<div class="grid-two imageandtext">
									<div class="imageandtext image_grid">
										<label for="box2">
											<img className="img-style-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/49132501_319385112008437_1916481305885802496_n.png?_nc_cat=104&_nc_ht=scontent.fbkk7-2.fna&oh=022b0f672c95852d1910bede9f2dce46&oe=5C8F798C" alt="noimage" />
										</label>
										<input id="box2" type="checkbox" onChange={() => { this.props.handleChangeStyle(`2`) }} />
										<div class="caption"></div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
								<div class="grid-two imageandtext">
									<div class="imageandtext image_grid">
										<label for="box3">
											<img className="img-style-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/49051426_214893809395463_494788779484119040_n.png?_nc_cat=102&_nc_ht=scontent.fbkk7-2.fna&oh=72f58af1345dff086b31d7900e24fb26&oe=5CA0D035" alt="noimage" />
										</label>
										<input id="box3" type="checkbox" onChange={() => { this.props.handleChangeStyle(`3`) }} />
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

						<div className="col-lg-9 col-md-9 col-sm-9">
						</div>
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								อกไก่
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`chicken`) }}> + </button>
									<div className="number-piece">{this.props[`chicken`]} </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`chicken`) }}> - </button>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								ฟักทอง
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`pumpkin`) }}> + </button>
									<div className="number-piece">{this.props[`pumpkin`]}  </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`pumpkin`) }}> - </button>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								อะโวคาโด
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`avocado`) }}> + </button>
									<div className="number-piece">{this.props[`avocado`]}  </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`avocado`) }}> - </button>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								แปะก๊วย
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`gingko`) }}> + </button>
									<div className="number-piece">{this.props[`gingko`]}  </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`gingko`) }}> - </button>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								งาดำ
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`ngadum`) }}> + </button>
									<div className="number-piece">{this.props[`ngadum`]} </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`ngadum`) }}> - </button>
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5">
								กล้วยหอม
                            </div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddflavor(`banana`) }}> + </button>
									<div className="number-piece">{this.props[`banana`]}  </div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveflavor(`banana`) }}> - </button>
								</div>
							</div>

						</div>
						<br />
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-5 col-sm-5 product-preview">
								<label>จำนวนกล่อง</label>
							</div>
							<div className="col-lg-7 col-md-7 col-sm-7">
								<div className="row">
									<button type="button" onClick={() => { this.props.handleChangeAddNumberOfBox() }}> + </button>
									<div className="number-piece">{this.props[`numBox`]}</div>
									<button type="button" class="btn btn-append" onClick={() => { this.props.handleChangeRemoveNumberOfBox() }}> - </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
