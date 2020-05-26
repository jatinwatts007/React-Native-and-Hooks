import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/colorCounter';
import { ScrollView } from 'react-native-gesture-handler';
const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  /* const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || red + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  };*/
  return (
    <ScrollView>
      <ColorCounter
        color="red"
        // onIncrease={() => setColor('red', COLOR_INCREMENT)}
        // onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="green"
        // onIncrease={() => setColor('green', COLOR_INCREMENT)}
        // onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="blue"
        // onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        // onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
