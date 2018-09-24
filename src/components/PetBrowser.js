import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  singlePet = () => {
    return this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    })

  }

  render() {
    // console.log('browser props', this.props);
    return (
      <div className="ui cards">
        {this.singlePet()}
      </div>
    );
  }
}

export default PetBrowser;
