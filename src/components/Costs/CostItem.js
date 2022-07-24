import "./CostItem.css"
import Card from "../UI/Card";
import CostDate from "./CostDate";
import React, { useState } from "react";


function CostItem (props){

	return(
		<li>
			<Card className="cost-item">
				<CostDate date={props.date}/>
				<div className="cost-item__description">
					<h2>{props.description}</h2>
					<p className="cost-item__price">{props.amount} Euro</p>
				</div>
			</Card>
		</li>
	);
}

export default CostItem;