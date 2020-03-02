import React from "react";
import { movielist } from "./Component/file";
import Movies from "./Component/Movies";
import "./App.css";
import Search from "./Component/Search";
import Addmovie from "./Component/Addmovie";

class App extends React.Component {
  state = {
    movielist: movielist,
    nameFilter:"",
    ratingFilter:0,
    loading:false
  };
  addmovies = newmovies =>
    this.setState({
      movielist: [...this.state.movielist, newmovies]
    });
  
    filterdMovie=x=>{
      setTimeout(() => {
        this.setState({ loading: false})
      }, 1500);
      this.setState({
        nameFilter:x,
        loading:true
      });
    };

    searchByRate = x => {
      setTimeout(() => {
        this.setState({ loading: false})
      }, 1500);
      this.setState({
        ratingFilter:x,
        loading:true
      })
    }

    

  render() {
    return (
      <div className="App">
        <Search filterdMovie={this.filterdMovie} searchByRate={this.searchByRate}/>
        <Movies bf={this.state.movielist.filter((el)=>(el.title.toLowerCase().includes(this.state.nameFilter)  &&  (el.rating >= this.state.ratingFilter)) )}
        loading={this.state.loading} />
        <Addmovie addmovies={this.addmovies} />
      </div>
    );
  }

}
export default App;
