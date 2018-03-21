import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./card/Card";
import CardSection from "./card/CardSection";
import Button from "./card/Button";

const AlbumCard = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    textContentStyle,
    thumbnailContainerStyle,
    titleTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={textContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist} </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button handlePress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumCard;
