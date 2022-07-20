import { useState } from "react";
import "./CostForm.css"

const CostForm = (props) => {

	const [nameInput, setNameInput] = useState("");
	const [sumInput, setSumInput] = useState("");
	const [dateInput, setDateInput] = useState("")

	// const [userInput, setUserInput] = useState({
	// 	nameInput: "",
	// 	sumInput:"",
	// 	dateInput:""
	// })

	function nameInputChangeHandler(event){
		setNameInput(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	name: event.target.value
		// })
	}

	function sumInputChangeHandler(event){
		setSumInput(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	sumInput: event.target.value
		// })
	}

	function dateInputChangeHandler(event){
		setDateInput(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	dateInput: event.target.value
		// })
	}

	
	function submitHandler(event){
		event.preventDefault();

		const costData = {
			name: nameInput,
			sum: sumInput,
			date: new Date (dateInput)
		}
		props.onSaveCostData(costData)

		setNameInput("")
		setSumInput("")
		setDateInput("")
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">

				<div className="new-cost__control">
					<label>Name</label>
					<input 
						value={nameInput}
						onChange={nameInputChangeHandler} 
						type="text"/>
				</div>

				<div className="new-cost__control">
					<label>Sum</label>
					<input 
						value={sumInput}
						onChange={sumInputChangeHandler} 
						type="number" min="0.01" step="0.01"/>
				</div>

				<div className="new-cost__control">
					<label>Date</label>
					<input 
						value={dateInput}
						onChange={dateInputChangeHandler} 
						type="date" min="2019-01-01" step="2023-12-31"/>
				</div>

				<div className="new-cost__actions">
					<button type="submit">Add cost</button>
				</div>

			</div>
		</form>

	);
}

export default CostForm;
