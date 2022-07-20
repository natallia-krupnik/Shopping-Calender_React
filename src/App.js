import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

	const data = [
		{
			id: "c1",
			date: new Date(2021, 0, 12),
			description: "Kühlschrank",
			amount: 999.99,
		},
		{
			id: "c2",
			date: new Date(2021, 1, 12),
			description: "MacBook",
			amount: 1999.99,
		},
		{
			id: "c3",
			date: new Date(2021, 7, 12),
			description: "Hose",
			amount: 49.99,
		}
	]

	const addCostHandler = (cost)=>{
		console.log(cost);
		console.log("APP Component")
	}
	return (
		<div>
			<NewCost onAddCost={addCostHandler}/>
			<Costs costs={data}/>
		</div>
	);
}

export default App;
