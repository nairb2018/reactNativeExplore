import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      {/* TextInput the same thing as Image tag... need a height and width to show up... */}
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  // whenever we have siblings, flex values will be added up and then divided as fraction
  // to compute how much space each sibling will take
  inputStyle: {
    color: "#000",
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23, // How much space in between two lines of text (for multi line text)
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
