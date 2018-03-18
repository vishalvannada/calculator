import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import swal from 'sweetalert';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            answer: ''
        };
    }

    addition() {

        console.log(this.state.first)
        if(isNaN(this.state.first) || isNaN(this.state.second)) {
            swal("Please Enter a Number");
            return;
        }

        if (this.state.first === "") {
            swal("Please enter the first number");
            console.log("first value"+this.state.first);
            return;
        }

        if (this.state.second === "") {
            swal("Please enter the second number");
            return;
        }

        console.log("here");
        axios.post('http://localhost:3001/add', {
            first: this.state.first,
            second: this.state.second
        }).then((response) => {
            this.setState({
                answer: response.data,
            });
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    subtraction() {
        if (isNaN(this.state.first) || isNaN(this.state.second)) {
            swal("Please Enter a Number");
            return;
        }

        if (this.state.first === "") {
            swal("Please enter the first number");
            return;
        }

        if (this.state.second === "") {
            swal("Please enter the second number");
            return;
        }

        axios.post('http://localhost:3001/subtract', {
            first: this.state.first,
            second: this.state.second
        }).then((response) => {
            this.setState({
                answer: response.data,
            });
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    multiplication() {
        if (isNaN(this.state.first) || isNaN(this.state.second)) {
            swal("Please Enter a Number");
            return;
        }

        if (this.state.first === "") {
            swal("Please enter the first number");
            return;
        }

        if (this.state.second === "") {
            swal("Please enter the second number");
            return;
        }
        axios.post('http://localhost:3001/multiply', {
            first: this.state.first,
            second: this.state.second
        }).then((response) => {
            this.setState({
                answer: response.data,
            });
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }

    division() {

        if (isNaN(this.state.first) || isNaN(this.state.second)) {
            swal("Please Enter a Number");
            return;
        }

        if (this.state.first === "") {
            swal("Please enter the first number");
            return;
        }

        if (this.state.second === "") {
            swal("Please enter the second number");
            return;
        }

        axios.post('http://localhost:3001/divide', {
            first: this.state.first,
            second: this.state.second
        }).then((response) => {
            this.setState({
                answer: response.data,
            });
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        });
    }


    render() {

        console.log("Vis");

        const isEmpty = () => {
            return this.state.answer === '';
        };

        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h1 className="text-center">Calculator</h1>

                    <div className="form-group col-md-6 mt-4 mx-auto">
                        <input
                            value={this.state.first}
                            name="first" className="form-control" type="number"
                            id="first" placeholder="First Number"
                            onChange={event => this.setState({first: event.target.value})}
                        required/>
                    </div>

                    <div className="form-group col-md-6 mx-auto">
                        <input
                            value={this.state.second}
                            className="form-control" name="second" type="number"
                            id="second" placeholder="Second Number"
                            onChange={
                                (event) => this.setState({second: event.target.value})}
                        />
                    </div>

                    <div className="text-center mt-5">
                        <button
                            onClick={() => this.addition()} type="button" className="btn btn-info mr-4">Addition
                        </button>
                        <button
                            onClick={() => this.subtraction()} type="button" className="btn btn-info mr-4">Subtraction
                        </button>
                        <button
                            onClick={() => this.multiplication()} type="button" className="btn btn-info mr-4">Multiplication
                        </button>
                        <button
                            onClick={() => this.division()} type="button" className="btn btn-info mr-4">Division
                        </button>

                    </div>


                    <h3 className={isEmpty() ? "class1 mt-4 text-center" : "class2 mt-4 text-center"}>Result is {this.state.answer}</h3>


                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
