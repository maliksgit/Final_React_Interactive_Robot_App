import React from 'react';
import Robot from './Robot';
const Robotloop =({Robots})=>{
	return (
		<div>
			{
			Robots.map((user,i)=>{
				return <Robot 
				key={i}
				id={Robots[i].id}
				name={Robots[i].name}
				email={Robots[i].email}
				/>
				})
			}
		</div>
		);
	}
export default Robotloop;