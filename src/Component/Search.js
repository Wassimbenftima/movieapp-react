import React, { Component } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Rate from "./Rate";
export default class Search extends Component {
  state = {
    search: "",
    rating: 0
  };

  render() {
    return (
      <div className="search">
        <div className="input-search">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Choose your movie"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.search}
              onChange={e =>
                this.setState(
                  {
                    search: e.target.value
                  },
                  () => this.props.filterdMovie(this.state.search)
                )
              }
            />
          </InputGroup>
        </div>
        <div className="rating">
          <Rate
            starIndex={x =>
              this.setState(
                {
                  rating: x
                },
                () => this.props.searchByRate(this.state.rating)
              )
            }
            rating={this.state.rating}
          />
        </div>
      </div>
    );
  }
}
