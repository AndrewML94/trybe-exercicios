import React, { Component } from 'react'

class PersonInformation extends Component {
  state = {
    loading: true,
    personInform: [],
  }

  async componentDidMount () {
    const request = await fetch('https://api.randomuser.me/');
    const json = await request.json();
    this.setState({
      loading: false,
      personInform: json.results,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.personInform[0].dob.age < AGE) return true;
  }

  render() {
    const { loading, personInform } = this.state;
    return (
      <div className='showPerson'>
        <ul className='ulPerson'>
          { loading ? <p className='loading'>Carregando...</p> : personInform.map(({ name, dob, email, picture, id}) =>
            <li className='liPerson' key={ id.value }>
              <img src={ picture.large } alt={ `${name.first} ${name.last}` } />
              <p className='infoPerson'>{ `${name.first} ${name.last}` }</p>
              <p className='infoPerson'>{ `${dob.age} anos` }</p>
              <p className='infoPerson'>{ email }</p>
            </li>) }
      </ul>
      </div>
    )
  }
}

export default PersonInformation;
