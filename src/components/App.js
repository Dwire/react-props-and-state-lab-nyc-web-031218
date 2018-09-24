import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onAdoptPet = (petId) => {

    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  onChangeType = (e) => {
    const type = e.target.value

    this.setState({
      filters: {...this.state.filters, type: type}
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    const type = this.state.filters.type

    if (type !== 'all') {
      url += `?type=${type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(this.setPetsList)
  }

  setPetsList = (pets) => {
    this.setState({
      pets: pets
    })
  }


  render() {
    console.log("state", this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}   onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
