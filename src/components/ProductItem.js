import React from 'react';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}
//<a href={product['url']}>
	render(){
		const { product } = this.props;
		return (
		    <div className="card" style={{ marginBottom: "10px"}} onClick={product['url']}>
				
			  <div className="card-body" >
			    <h4 className="card-title">{product['name']}</h4>
			    <p className="card-text">{product['parentSub']}, {product['childSub']}</p>
			    <h5 className="card-text"><large>Provider: </large>{product['provider']}</h5>
			    <p className="card-text"><large>University: </large>{product['university']}</p>

				<span>Video: </span>
				<a href={product['video']}>ClickHere</a>
				<span>Course: </span>
				<a href={product['url']}>ClickHere</a>
				<p>Length: {product['length']}</p>
				<p>Next Session: {product['nextSession']}</p>
			    
			    { /*product.available_quantity > 0 ?
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button>
			    		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> : 
			    	<p className="text-danger"> product is out of stock </p>
				*/}

			  </div>
			</div>
		)
	}
}
