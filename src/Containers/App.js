import React, {Component} from 'react';
import Search from '../Components/Search';
import Robotloop from '../Components/Robotloop';
export default class App extends Component{
	constructor(){
		super()
		this.state={
			Robots:[],
			searchField:'',
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({Robots:users}))}
	onSearchChange=(event)=>{
		return this.setState({searchField:event.target.value});
	}
	render(){
		const {searchField,Robots}=this.state;
		const filteredArray=Robots.filter(Robots=>{
			return Robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return(
			<div>
				<h1> Search Robots Use Name Please </h1>
				<Search searchTrigired={this.onSearchChange}/>
				<Robotloop  Robots={filteredArray} />
			</div>
		);}
}
