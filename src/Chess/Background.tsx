import React from "react";
import { View, Text } from "react-native";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

interface RowProps {
  row: number;
}

interface SquareProps {
  row: number;
  col: number;
}

const Square = (props: SquareProps) => {
  const { col, row } = props;
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  const color = (col + offset) % 2 === 0 ? BLACK : WHITE;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color, fontWeight: "500", opacity: col === 0 ? 1 : 0 }}>
        {8 - row}
      </Text>
      <Text
        style={{
          color,
          fontWeight: "500",
          alignSelf: "flex-end",
          opacity: row === 7 ? 1 : 0,
        }}
      >
        {String.fromCharCode("a".charCodeAt(0) + col)}
      </Text>
    </View>
  );
};

const Row = (props: RowProps) => {
  const { row } = props;
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {new Array(8).fill(0).map((_v, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

const Background = () => {
  return (
    <View style={{ flex: 1 }}>
      {new Array(8).fill(0).map((_v, row) => (
        <Row key={row} row={row} />
      ))}
    </View>
  );
};

export default Background;
