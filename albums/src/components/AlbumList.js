import React, { Component } from "react";
import { ScrollView } from "react-native";
import AlbumCard from "./AlbumCard";

class AlbumList extends Component {
  // babel will transpile this into a constructor
  state = { albums: [] };

  componentDidMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((response) => response.json())
      .then((data) => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumCard key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
