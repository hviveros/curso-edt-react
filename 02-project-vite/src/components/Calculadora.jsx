import { Component } from "react";

// Son declaradas con Clases - POO
class Calculadora extends Component {
    constructor(props){
        super(props)
        this.state = {
            numero1: '',
            numero2: ''
        }

        this.setNumber = this.setNumber.bind(this);
    }

    setNumber = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

    render(){
        return (
            <>
                <h2>{ this.props.nombre }</h2>
                <form>
                    <input 
                        type="number" 
                        name="numero1" 
                        value={this.state.numero1} 
                        onChange={this.setNumber}
                    />
                    <input 
                        type="number" 
                        name="numero2" 
                        value={this.state.numero2} 
                        onChange={this.setNumber}
                    />
                </form>
                <span>Resultado: { Number(this.state.numero1) + Number(this.state.numero2) }</span>
            </>
        )
    }
}

export default Calculadora;
