import React from 'react';
import OrderCollape from './orderCollape'
import { Link, Element } from "react-scroll";

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
			numBox: 0,
			boxStyle: 1,
			orderList: [],
			OrderProductTemplete: {
				size: 0,
				OrderAddress: "",
			}
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
			}
		})
	}

	handleChangeStyle(style) {
		const originalStyle = this.state[style];
		this.setState({
			boxStyle: originalStyle,
		})
	}

	handleChangeAddflavor(flavor) {
		console.log("Size", this.state.OrderProductTemplete.size)
		console.log('Flavor', this.state[flavor]);
		if (this.state.OrderProductTemplete.size >= this.state[flavor]) {
			const originalNumFlavor = this.state[flavor];
			this.setState({
				[flavor]: originalNumFlavor + 1,
			})
		}

	}

	handleChangeRemoveflavor(flavor) {
		const originalNumFlavor = this.state[flavor];
		this.setState({
			[flavor]: originalNumFlavor - 1,
		})
	}

	handleChangeAddNumberOfBox() {

		const originalNumBox = this.state.numBox;
		this.setState({
			numBox: originalNumBox + 1,
		})

	}

	handleChangeRemoveNumberOfBox() {
		const originalNumBox = this.state.numBox;
		this.setState({
			numBox: originalNumBox - 1,
		})
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
		console.log("order ", this.state.orderList)
		window.sessionStorage.setItem("orderList", JSON.stringify(this.state.orderList));
	}

	render() {
		return (
			<div className="container">
				<h2>เลือกขนาดที่คุณต้องการ</h2>
				<br />
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4 product-preview">
						<Link to="flavor"><img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48940554_1195298543952014_3681802818336849920_n.png?_nc_cat=109&_nc_ht=scontent.fbkk7-2.fna&oh=be0dba04e6582f587345b338450f886e&oe=5C8FDB97"
							name="orderedBox" data-toggle="collapse" data-target="#choose-flavor" onClick={() => this.handleChange(1)} alt="noimage" />
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 product-preview">
						<Link to="flavor"><img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48412146_346510252741800_8548180281452920832_n.png?_nc_cat=109&_nc_ht=scontent.fbkk7-2.fna&oh=545309a97bf9e170ab5fd78723660b2d&oe=5C9381E8"
							name="orderedBox" data-toggle="collapse" data-target="#choose-flavor" onClick={() => this.handleChange(2)} alt="noimage" />
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 product-preview">
						<Link to="flavor">
							<img className="img-box-select" src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/48417776_525187834651070_488155984179494912_n.png?_nc_cat=102&_nc_ht=scontent.fbkk7-2.fna&oh=f95c880baa2c477adabd555c079d9b30&oe=5CA208EF"
								name="orderedBox" data-toggle="collapse" data-target="#choose-flavor" onClick={() => this.handleChange(5)} alt="noimage" />
						</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-4 product-preview">
						<Link to="flavor" activeClass="active" smooth={true} duration={500}>
							<img className="img-box-select" src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.15752-9/48415180_367564324046203_4758985198903754752_n.png?_nc_cat=107&_nc_ht=scontent.fbkk7-3.fna&oh=39b9ea912a59831297aab70b9f4a865c&oe=5C90B2E9"
								name="orderedBox" data-toggle="collapse" data-target="#choose-flavor" onClick={() => this.handleChange(8)} alt="noimage" />
						</Link>
					</div>


				</div>
				<Element name="flavor">
				</Element>

				<div className="collapse order-collapse" id="choose-flavor" >
					<OrderCollape
						handleChangeAddflavor={this.handleChangeAddflavor}
						handleChangeRemoveflavor={this.handleChangeRemoveflavor}
						handleChangeAddNumberOfBox={this.handleChangeAddNumberOfBox}
						handleChangeRemoveNumberOfBox={this.handleChangeRemoveNumberOfBox}
						handleChangeStyle={this.handleChangeStyle}
						handleAddToCart={this.handleAddToCart}
						handlePayment={this.handlePayment}
						orderedBox={this.state.orderedBox}
						chicken={this.state.chicken}
						pumpkin={this.state.pumpkin}
						avocado={this.state.avocado}
						gingko={this.state.gingko}
						ngadum={this.state.ngadum}
						banana={this.state.banana}
						numBox={this.state.numBox}
						boxStyle={this.state.boxStyle}

					/>
					<br />
				</div>

				<Element name="flavor">
				</Element>

			</div>
		)
	}
}
