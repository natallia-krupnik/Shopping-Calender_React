import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

	const data = [
		{
			date: new Date(2021, 0, 12),
			description: "Kühlschrank",
			amount: 999.99,
		},
		{
			date: new Date(2021, 1, 12),
			description: "MacBook",
			amount: 1999.99,
		},
		{
			date: new Date(2021, 7, 12),
			description: "Hose",
			amount: 49.99,
		}
	]

	return (
		<div>
			<NewCost/>
			<Costs costs={data}/>
		</div>
	);
}

export default App;
