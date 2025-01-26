import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Bristol",
  ];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handlePress = () => {
    setAlertVisibility(true);
    console.log("Button pressed!");
  };

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World!</Alert>}
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
