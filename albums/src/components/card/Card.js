import React from "react";
import { View } from "react-native";
// this is actually just a reactJS equivalent of a component level css file
// due to the lack of a css file ...
const Card = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2, // rounded corners
    borderColor: "#ddd",
    borderBottomWidth: 0,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2, // round off the shadow edges (round edges), better to = borderRadius
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10
  }
};

export default Card;
