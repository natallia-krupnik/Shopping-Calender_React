import React, { useState } from "react";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostItem from "./CostItem";
import "./Costs.css"

const Costs =(props)=>{

	const[selectedYear, setSelectedYear] = useState ('2022')

	const yearChangeHandler =(year)=>{
		setSelectedYear(year)
	}
									// Jahr filtern
	const filteredCosts = props.costs.filter(itemCost => {
		return (												//true
			itemCost.date.getFullYear().toString() === selectedYear
		)
	})

	let constContent = <p>You don't have any shopping this year</p>
	if (filteredCosts.length >0){
		constContent = filteredCosts.map ((itemCost) => (
			<CostItem 
				key={itemCost.id}
				date={itemCost.date} 
				description={itemCost.description} 
				amount={itemCost.amount}
			/>
		))
	}

	return(
		<div> 
			<Card className="costs">
			<CostFilter year={selectedYear} 
									//two-way-binding
									//year- es soll 2021 stehen, wie bei useState 
									//kehr zu CostFilter "Select" zurück und füge "value" zu
							onYearChangeHandler={yearChangeHandler}/>

								{/*1 Option short*/}
				{constContent}

								{/*2 Option &&*/}
				{/* {filteredCosts.length === 0 && <p>You don't have any shopping this year</p>}
				{filteredCosts.length !== 0 && filteredCosts.map ((itemCost) => (
								<CostItem 
									key={itemCost.id}
									date={itemCost.date} 
									description={itemCost.description} 
									amount={itemCost.amount}
								/>
				))} */}

									{/*3 Option ternary Operator*/}
				{/* {filteredCosts.length === 0 
						? <p>You don't have any shopping</p>
						: filteredCosts.map((itemCost) => (
								<CostItem 
									key={itemCost.id}
									date={itemCost.date} 
									description={itemCost.description} 
									amount={itemCost.amount}
					/>
					))}	 */}
			</Card>
		</div>
	)
}
export default Costs;