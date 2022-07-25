import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const INITIAL_COST = [
	// {
	// 	id: "c1",
	// 	date: new Date(2020, 0, 12),
	// 	description: "Kühlschrank",
	// 	amount: 999.99,
	// },
	// {
	// 	id: "c2",
	// 	date: new Date(2021, 1, 12),
	// 	description: "MacBook",
	// 	amount: 1999.99,
	// },
	// {
	// 	id: "c3",
	// 	date: new Date(2022, 7, 12),
	// 	description: "Hose",
	// 	amount: 49.99,
	// }
]

const App=()=> {

	const[costs, setCosts]= useState(INITIAL_COST)

	const addCostHandler = (itemCost)=>{
		setCosts(previosCosts =>{   //previos этот аргумент получаем автоматически из реакта
			return [itemCost, ...previosCosts]
		});
	}
	return (
		<div>
			<NewCost onAddCost={addCostHandler}/>
			<Costs costs={costs}/>
		</div>
	);
}

export default App;
