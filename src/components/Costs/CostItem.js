import "./CostItem.css"
import Card from "../UI/Card";
import CostDate from "./CostDate";
import React, { useState } from "react";


function CostItem (props){

	const [description, setDescription] = useState(props.description);
	

	function changeDescriptionHandler(){
		setDescription("sex")
	}

	return(
		<Card className="cost-item">
			<CostDate date={props.date}/>
			<div className="cost-item__description">
				<h2>{description}</h2>
				<p className="cost-item__price">{props.amount}Euro</p>
			</div>
			<button 
				onClick={changeDescriptionHandler}>
					Ändere die Beschreibung
			</button>
		</Card>
	);
}

export default CostItem;