import React, { useState } from "react";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostList from "./CostList";
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

	return(
		<div> 
			<Card className="costs">
			<CostFilter year={selectedYear} 
									//two-way-binding
									//year- es soll 2021 stehen, wie bei useState 
									//kehr zu CostFilter "Select" zurück und füge "value" zu
							onYearChangeHandler={yearChangeHandler}/>
				<CostList costs={filteredCosts}/>
			</Card>
		</div>
	)
}
export default Costs;