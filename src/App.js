import React from 'react';
import Search from './Search.js';
import Item from './Item.js';
import data from './data';
import './App.css';

const toEmbedUrl = (url) =>
  url.replace(
    /https:\/\/www\.youtube\.com\/watch\?v=/,
    '//www.youtube.com/embed/'
  );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.key === '/') {
      e.preventDefault();
      this.inputEl.focus();
    }
  }

  handleSearchChange(event) {
    this.setState({ query: event.target.value });
  }

  renderItems() {
    const { query } = this.state;
    return data.map((video, i) =>
      <Item
        key={video.url}
        url={toEmbedUrl(video.url)}
        title={video.title}
        tags={video.tags}
        hidden={!video.tags.concat(video.title).some(tag =>
          query.trim().split(' ').some(q => tag.toLowerCase().includes(q.toLowerCase()))
        )}
      />);
  }

  render() {
    return (
      <div className="app">
        <Search
          inputRef={el => { this.inputEl = el; }}
          value={this.state.query}
          onChange={this.handleSearchChange}
        />
        {this.renderItems()}
      </div>
    );
  }
}
