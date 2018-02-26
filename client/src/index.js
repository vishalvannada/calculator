import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
        console.log("here");

        axios.post('http://localhost:3001/subtract', {
            first: '40',
            second: '40'
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    multiplication() {
        axios.post('http://localhost:3001/multiply', {
            first: '40',
            second: '40'
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    division() {
        axios.post('http://localhost:3001/divide', {
            first: '40',
            second: '40'
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {

        const style = {
            margin: 12,
        };

        const labelStyle = {
            fontWeight: 'bold',
        };

        const isEmpty = () => {
            console.log(this.state.answer === '');
            return this.state.answer === '';
        };

        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h1 className="text-center">Calculator</h1>

                    <div className="form-group col-md-6 mt-4 mx-auto">
                        <input
                            value={this.state.first}
                            name="first" className="form-control" type="number" step="any"
                            id="first" placeholder="First Number"
                            onChange={event => this.setState({first: event.target.value})}
                        />
                    </div>

                    <div className="form-group col-md-6 mx-auto">
                        <input
                            value={this.state.second}
                            className="form-control" name="second" type="number" step="any"
                            id="second" placeholder="Second Number"
                            onChange={event => this.setState({second: event.target.value})}
                        />
                    </div>


                    <MuiThemeProvider>
                        <RaisedButton onClick={() => this.addition()} label="Addition" labelColor="#FAFAFA"
                                      backgroundColor="#BF360C" labelStyle={labelStyle} style={style}/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <RaisedButton onClick={() => this.subtraction()} label="Subtraction" labelColor="#FAFAFA"
                                      backgroundColor="#BF360C" labelStyle={labelStyle} style={style}/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <RaisedButton onClick={() => this.multiplication()} label="Multiplication" labelColor="#FAFAFA"
                                      backgroundColor="#BF360C" labelStyle={labelStyle}
                                      style={style}/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <RaisedButton onClick={() => this.division()} label="Division" labelColor="#FAFAFA"
                                      backgroundColor="#BF360C" labelStyle={labelStyle} style={style}/>
                    </MuiThemeProvider>

                    <h3 className={isEmpty() ? "class1" : "class2"}>Result is {this.state.answer}</h3>


                </div>
            </div>
        )
            ;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
