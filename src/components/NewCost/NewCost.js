import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) => {

	const saveCostDataHandler =(inputCostData)=>{

		const costData ={
			...inputCostData,
			id: Math.floor(Math.random()*100).toString()
		}
		props.onAddCost(costData)
		setIsFormVisible(false)
	}

	const inputCostDataHandler = () =>{
		setIsFormVisible(true)
	}

	const [isFormVisible, setIsFormVisible] = useState(false);

	const deleteCostHandler =()=>{
		setIsFormVisible(false)
	}

	return (
		<div className="new-cost"> 
			<div className="new-cost__actions new-cost__invisible" >
					{!isFormVisible &&
							<button 
							onClick={inputCostDataHandler} 
							type="submit">Add a new cost
							</button>}
			</div>
			{isFormVisible && 
					<CostForm 
							onSaveCostData={saveCostDataHandler}
							onDelete={deleteCostHandler}/>}
		</div>
	);
}

export default NewCost;
