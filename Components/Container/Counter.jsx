//import liraries

import { useEffect, useState } from "react";
import { View, Text } from "react-native";

// create a component
export default function Counter() {
  const [count, setCount] = useState(0);

  //basic useEffect syntaxe
  //useEffect(function(){}, [])

  useEffect(() => {
    console.log("Mounted in dom");
    return () => {
      console.log("Unmounted from DOM");
    };
  }, [count]);

  console.log("On render: " + count);
  function handleCount() {
    // console.log("Before Change: " + count);
    setCount(count + 1);
    // console.log("After Change: " + count);
  }

  return (
    <View>
      <Text style={{ fontSize: 50 }} onPress={handleCount}>
        {count}
      </Text>
    </View>
  );
}
