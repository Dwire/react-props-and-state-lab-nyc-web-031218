import React from 'react';

class Pet extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    console.log(this.props);

    const {id, type, gender, age, weight} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">Gender: {gender}</a>
          <div className="meta">
            <span className="date">Type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ?
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button> :
            <button className="ui disabled button">Already adopted</button>
          }


        </div>
      </div>
    );
  }
}

export default Pet;
