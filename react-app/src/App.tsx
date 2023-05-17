
import ListGroup from "./components/ListGroup";

function App() {

  let items = [
  'New York',
  'Lagos',
  'Dublin',
  'Peru',
  'Ghana'
];

  //Event handler
  const selectItem = (item: string) => console.log(item)

  return (<div><ListGroup items={items} heading="City Listing" onSelectItem={selectItem}/></div>)
}

export default App;