import React from 'react';
import axios from 'axios';
import preview_img from '../assets/img/section_img2.jpg'

class Payment extends React.Component {
	constructor() {
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
		const price = orderList.map(order => this.calculatePrice(order))
		this.setState({
			orderList,
			price
		})

	}

	handleChangeName(e) {
		this.setState({
			name: e.target.value,
		})
	}

	handleChangeAddress(e) {
		this.setState({
			address: e.target.value,
		})
	}

	handleSubmit() {
		console.log("Fetch submit")
		const templeteOrderProductField = (order) => `กล่องขนาด${order.OrderProductTemplete.size} แบบรูปแบบกล่องแบบที่${order.boxStyle} ${order.numBox} จำนวน ประกอบไปด้วย` +
			` อกไก่ ${order.chicken} ฟักทอง ${order.pumpkin} อะโวคาโด ${order.avocado} แปะก๋วย ${order.gingko} ง่าดำ ${order.ngadum} กล้วย ${order.banana}`
		const OrderProductField = this.state.orderList.map(order => templeteOrderProductField(order))

		OrderProductField.forEach(order => {
			const url = `http://currypuffapi.tk/api/orders/add.php/?OrderProduct=${order}&OrderAddress=${this.state.name}_${this.state.address}`
			axios.get(url).then((res) => {
				console.log(res);
			})
		})

	}

	calculatePrice(order) {
		const size = order.OrderProductTemplete.size
		let price = 0;
		if (size === 1) {
			price = 30.0
		} else if (size === 2) {
			price = 60.0
		} else if (size === 5) {
			price = 140.0
		} else {
			price = 230.0
		}

		this.setState({
			total: this.state.total + (price * order.numBox)
		})

		return price * order.numBox
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12">
						<h2>ยืนยันการสั่งซื้อสินค้า</h2>
						<img src={preview_img} className="img-fluid" alt="Productimage" />
					</div>
					<div className="col-lg-7 col-md-7 col-sm-12">
						<div className="payment-bill-table">
							<table className="table table-condensed">
								<tr>
									<td className="text-center"><strong>รายการสินค้า</strong></td>
									<td className="text-center"><strong>จำนวนที่สั่ง</strong></td>
									<td className="text-center"><strong>ราคา</strong></td>
								</tr>
								{this.state.orderList.map((order, index) => (
									<tbody>
										<tr>
											<td className="text-center">กล่อง&nbsp; {order.OrderProductTemplete.size} &nbsp;ชิ้น</td>
											<td className="text-center">{order.numBox}</td>
											<td className="text-center">{this.state.price[index]}</td>
										</tr>
									</tbody>
								))}
								<tr>
									<td className="text-center">รวม</td>
									<td></td>
									<td className="text-center">{this.state.price.reduce((prev, curr) => { return prev + curr }, 0)}</td>
								</tr>
							</table>
						</div>
						<div className="contact-form">
							<div className="row form-group">
								<input type="text"
									placeholder="ชื่อ-นามสกุล"
									value={this.state.name}
									onChange={this.handleChangeName} />
							</div>
							<div className="row form-group">
								<textarea name="address"
									rows="5"
									cols="40"
									placeholder="ที่อยู่ในการจัดส่ง"
									value={this.state.address}
									onChange={this.handleChangeAddress}>
								</textarea>
							</div>

							<div className="row form-group">
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
