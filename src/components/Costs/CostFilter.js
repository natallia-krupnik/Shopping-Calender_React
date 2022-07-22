import "./CostFilter.css";

const CostFilter = (props) => {


	const yearChangeHandler =(event)=>{
		props.onYearChangeHandler(event.target.value)
	}

	return (
		<div className="costs-filter">
			<div className="costs-filter__control">
				<label>Filter by year</label>
				<select onChange={yearChangeHandler} //two-way-binding 
							value={props.year}>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
			</div>
			
		</div>
	);
}

export default CostFilter;
