import "./CostDate.css"
function CostDate(props){

	const day = props.date.toLocaleString("eg-EG", {day: "2-digit" });
	const month = props.date.toLocaleString("eg-EG", {month: "long" });
	const year = props.date.getFullYear();

	return(
		<div className="cost-date">
			<div>{day}</div>
			<div>{month}</div>
			<div>{year}</div>
		</div>
	)

}
export default CostDate;