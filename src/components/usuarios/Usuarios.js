import React, {Fragment, Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Usuarios extends Component {

  constructor() {
    super();

    this.state = {
      usuarios: []
    }
  }

  async componentDidMount (){

    // llamada axios 
    const usuariosApi = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("usuarios api:: ", usuariosApi);

    this.setState({
      usuarios: usuariosApi.data
    })
  }

  contenidoFilasTabla = () => (
    this.state.usuarios.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.website}</td>
        <td>{user.email}</td>
      </tr>
    )) 
  );


  render() {

    console.log("props ::: ", this.props)

    return (
      <div className="j-container container">
        <table className="table table-inverse mt-4">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Website</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { this.contenidoFilasTabla() }
          </tbody>
        </table>
      </div>
    );    
  }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer
}

export default connect(mapStateToProps, { /* actions */ })(Usuarios);