import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../repository';

export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			length:0,
			date:0,
			provider:'',
			page:1,
			next:'',
			child:''
		}
	}

	componentWillMount() {
		// const {date,length,provider,page,next,child}=this.state
		// getProducts(date,length,provider,page,next,child).then((products) => {
		// 	console.log(products)
	    //   this.setState({ products });
		// });
		this.findAll();
	}

	sortLength=async ()=>{
        await this.setState((prevState,props)=>({
            length:prevState.length+1
		}))
		this.findAll();
	}
	
	sortDate=async ()=>{
        await this.setState((prevState,props)=>({
            date:prevState.date+1
		}))
		this.findAll();
	}

	nextPage=async ()=>{
        await this.setState((prevState,props)=>({
            page:prevState.page+1
		}))
		this.findAll();
	}

	prevPage=async ()=>{
        await this.setState((prevState,props)=>({
            page:prevState.page-1
		}))
		if(this.state.page<1)
		{
			this.setState((prevState,props)=>({
				page:1
			}))
		}
		this.findAll();
	}
	
	handleProviderChange1=async (event)=>{
        await this.setState({
            provider:event.target.value
        })
	}
	
	handleProviderChange2=async (event)=>{
        await this.setState({
            child:event.target.value
        })
	}

	handleProviderChange3=async (event)=>{
        await this.setState({
            next:event.target.value
        })
	}

	handleSubmit=async (event)=>{
        // alert(`${this.state.provider} ${this.state.length} ${this.state.date}`)
		event.preventDefault()
		this.findAll();
	}
	
	findAll=async ()=>{
		const {length,date,provider,page,next,child}=this.state
		await getProducts(date,length,provider,page,next,child).then((products) => {
			this.setState({ products });
		  });
	}

	render() {
		const { products,provider,child,next } =  this.state;
		return (
			<div className=" container">
				<h3 className="card-title">BYJU's</h3>
				<span><large>Sort: </large></span>
				<button onClick={()=>this.sortLength()}>Length</button>
				<button onClick={()=>this.sortDate()}>Next Session Date</button>
				<form onSubmit={this.handleSubmit}>
				<div>
                    <span>Provider: </span>
                    <input type='text' value={provider} onChange={this.handleProviderChange1}/>
                </div>
				<div>
                    <span>Child Subject: </span>
                    <input type='text' value={child} onChange={this.handleProviderChange2}/>
                </div>
				<div>
                    <span>Next Session Date: </span>
                    <input type='text' value={next} onChange={this.handleProviderChange3}/>
                </div>
				<button type="submit">Submit</button>
				</form>
				<hr/>
				{
					products.map((product, index) => (
						<div>
					<ProductItem product={product} key={index}/>
					</div>
		         ))
				}
				<hr/>
				{/*
				<Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Cart</button></Link>
				*/}
				<br/><br/><br/>
				<button onClick={()=>this.prevPage()}>prev</button>
				<button onClick={()=>this.nextPage()}>next</button>
			</div>
		);
	}
}
