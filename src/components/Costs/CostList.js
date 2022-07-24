import React from 'react';
import "./CostList.css"
import CostItem from './CostItem';


const CostList = (props) => {
	
	if (props.costs.length === 0){
		return(
			<h2 className='cost-list__fallback'>You don't have any shopping this year</h2>
		)
	}
	return (
		<div>
			<ul className='cost-list'>
			{props.costs.map ((itemCost) => (
			<CostItem 
				key={itemCost.id}
				date={itemCost.date} 
				description={itemCost.description} 
				amount={itemCost.amount}
			/>
		))}
			</ul>
		</div>
	);
}

export default CostList;
