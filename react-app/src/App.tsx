import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Bristol",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <div>
      <Alert>
        Hello World!
      </Alert>
      <Button colour="danger" onPress={handlePress}>
        Danger
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
