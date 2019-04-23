import React from 'react';
import OrderChooseFlavor from './OrderChooseFlavor'
import { Link, Element } from "react-scroll";
import kareepuff1 from '../assets/img/kareepuff-1.png';
import kareepuff2 from '../assets/img/kareepuff-2.png';
import kareepuff5 from '../assets/img/kareepuff-5.png';
import kareepuff8 from '../assets/img/kareepuff-8.png';

export default class Order extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orderedBox: 1,
			chicken: 0,
			pumpkin: 0,
			avocado: 0,
			gingko: 0,
			ngadum: 0,
			banana: 0,
			numBox: 1,
			boxStyle: 1,
			orderList: [],
			OrderProductTemplete: {
				size: 0,
				OrderAddress: "",
			},
			showOrderMenu: false,
			totalNumFlavor: 0
		}
		this.handleChangeAddflavor = this.handleChangeAddflavor.bind(this);
		this.handleChangeRemoveflavor = this.handleChangeRemoveflavor.bind(this);
		this.handleChangeAddNumberOfBox = this.handleChangeAddNumberOfBox.bind(this);
		this.handleChangeRemoveNumberOfBox = this.handleChangeRemoveNumberOfBox.bind(this);
		this.handleChangeStyle = this.handleChangeStyle.bind(this);
		this.handlePayment = this.handlePayment.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
	}



	handleChange = (event) => {
		const newOrderProduct = this.state.OrderProductTemplete;
		this.setState({
			OrderProductTemplete: {
				...newOrderProduct,
				size: event,
			},
			showOrderMenu: true
		})
		console.log("showOrderMenu "+this.state.showOrderMenu)
	}

	handleChangeStyle(style) {
		const originalStyle = style;
		this.setState({
			boxStyle: originalStyle
		})
	}

	handleChangeAddflavor(flavor) {
		console.log("Size", this.state.OrderProductTemplete.size)
		console.log('Flavor', this.state[flavor]);
		if (this.state.OrderProductTemplete.size >= this.state[flavor]) {
			const originalNumFlavor = this.state[flavor];
			const originalTotalNumFlavor = this.state.totalNumFlavor;
			if(this.state.totalNumFlavor < this.state.OrderProductTemplete.size){
				this.setState({
					[flavor]: originalNumFlavor + 1,
					totalNumFlavor: originalTotalNumFlavor + 1
				})
			}
		}
	}

	handleChangeRemoveflavor(flavor) {
		const originalNumFlavor = this.state[flavor];
		const originalTotalNumFlavor = this.state.totalNumFlavor;
		if(this.state[flavor] > 0) {
			this.setState({
				[flavor]: originalNumFlavor - 1,
				totalNumFlavor: originalTotalNumFlavor - 1
			})
		}
	}

	handleChangeAddNumberOfBox() {

		const originalNumBox = this.state.numBox;
		this.setState({
			numBox: originalNumBox + 1,
		})

	}

	handleChangeRemoveNumberOfBox() {
		const originalNumBox = this.state.numBox;
		if(this.state.numBox > 1){
			this.setState({
				numBox: originalNumBox - 1,
			})
		}
	}

	handleAddToCart() {
		const originalOrderList = this.state.orderList
		originalOrderList.push({
			orderedBox: this.state.orderedBox,
			chicken: this.state.chicken,
			pumpkin: this.state.pumpkin,
			avocado: this.state.avocado,
			gingko: this.state.gingko,
			ngadum: this.state.ngadum,
			banana: this.state.banana,
			numBox: this.state.numBox,
			boxStyle: this.state.boxStyle,
			OrderProductTemplete: this.state.OrderProductTemplete
		}
		)
		this.setState({
			orderList: originalOrderList
		})
		window.sessionStorage.setItem("orderList", JSON.stringify(this.state.orderList));
	}

	handlePayment() {
		const originalOrderList = this.state.orderList
		originalOrderList.push({
			orderedBox: this.state.orderedBox,
			chicken: this.state.chicken,
			pumpkin: this.state.pumpkin,
			avocado: this.state.avocado,
			gingko: this.state.gingko,
			ngadum: this.state.ngadum,
			banana: this.state.banana,
			numBox: this.state.numBox,
			boxStyle: this.state.boxStyle,
			OrderProductTemplete: this.state.OrderProductTemplete
		}
		)
		this.setState({
			orderList: originalOrderList
		})
		console.log("boxStyle ", this.state.orderList.boxStyle)
		console.log("order ", this.state.orderList)
		window.sessionStorage.setItem("orderList", JSON.stringify(this.state.orderList));
	}

	render() {
		return (
			<div className="container">
				<h2>เลือกขนาดที่คุณต้องการ</h2>
				<br />
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
						<Link to="flavor" activeClass="active" smooth={true} duration={500}>
							<img className="img-box-select" src={kareepuff1}
								name="orderedBox"  onClick={() => this.handleChange(1)} alt="noimage" />
							<div className="box-caption" onClick={() => this.handleChange(1)}>
								<h5>ความจุ 1 ชิ้น</h5>
							</div>
						</Link>
					</div>

					<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
						<Link to="flavor" activeClass="active" smooth={true} duration={500}>
							<img className="img-box-select" src={kareepuff2}
							name="orderedBox"  onClick={() => this.handleChange(2)} alt="noimage" />
							<div className="box-caption" onClick={() => this.handleChange(2)}>
								<h5>ความจุ 2 ชิ้น</h5>
							</div>
						</Link>
					</div>

					<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
						<Link to="flavor" activeClass="active" smooth={true} duration={500}>
							<img className="img-box-select" src={kareepuff5}
								name="orderedBox" onClick={() => this.handleChange(5)} alt="noimage" />							
							<div className="box-caption" onClick={() => this.handleChange(5)}>
								<h5>ความจุ 5 ชิ้น</h5>
							</div>
						</Link>
					</div>

					<div className="col-lg-3 col-md-3 col-sm-3 product-preview">
						<Link to="flavor" activeClass="active" smooth={true} duration={500}>
							<img className="img-box-select" src={kareepuff8}
								name="orderedBox" onClick={() => this.handleChange(8)} alt="noimage" />
							<div className="box-caption" onClick={() => this.handleChange(8)}>
								<h5>ความจุ 8 ชิ้น</h5>
							</div>
						</Link>
					</div>


				</div>
				<Element name="flavor">
				</Element>
				{this.state.showOrderMenu ? 
				<div className="order-collapse" >
					<OrderChooseFlavor
						handleChangeAddflavor={this.handleChangeAddflavor}
						handleChangeRemoveflavor={this.handleChangeRemoveflavor}
						handleChangeAddNumberOfBox={this.handleChangeAddNumberOfBox}
						handleChangeRemoveNumberOfBox={this.handleChangeRemoveNumberOfBox}
						handleChangeStyle={this.handleChangeStyle}
						handleAddToCart={this.handleAddToCart}
						handlePayment={this.handlePayment}
						chicken={this.state.chicken}
						pumpkin={this.state.pumpkin}
						avocado={this.state.avocado}
						gingko={this.state.gingko}
						ngadum={this.state.ngadum}
						banana={this.state.banana}
						numBox={this.state.numBox}
						boxStyle={this.state.boxStyle}
						OrderProductTemplete={this.state.OrderProductTemplete}

					/>
					<br />
				</div>
				: null }
				{/* <Element name="flavor">
				</Element> */}
			</div>
		)
	}
}
