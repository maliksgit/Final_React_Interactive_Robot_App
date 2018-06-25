import React from 'react';
const Robot=({name,id,email})=>{
	return (
		<div className='tc bg-light-blue dib grow ma2 pa2 br5 shadow-5'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='roboDummy' />
			<h1> {id} </h1>
			<h2> {name} </h2>
			<h3> {email} </h3>
 		</div>
 		);
}
export default Robot;