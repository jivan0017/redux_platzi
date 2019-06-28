import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import  * as traerTodos   from '../../actions/usuariosActions';
import Spinner from '../helpers/Spinner';

class Usuarios extends Component {

  constructor() {
    super();

    this.state = {
      usuarios: []
    }
  }

  componentDidMount (){
    this.props.traerTodosLosUsuarios();
  }

  ponerContenidoTabla = () => {

    if (this.props.loading) {
      return (
        <Spinner />
      );
    }

    return(
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
    );
  }

  contenidoFilasTabla = () => (
    this.props.usuarios.map((user) => (
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
        { this.ponerContenidoTabla() }
      </div>
    );    
  }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer
}

export default connect(mapStateToProps,  traerTodos )(Usuarios);