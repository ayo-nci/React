
import ListGroup from "./components/ListGroup";

function App() {

  let items = [
  'New York',
  'Lagos',
  'Dublin',
  'Peru',
  'Ghana'
];
  return (<div><ListGroup items={items} heading="City Listing"/></div>)
}

export default App;