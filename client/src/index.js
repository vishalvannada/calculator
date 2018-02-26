import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);

    }

    function () {

        axios.post('http://localhost:3001/add', {
            first: '40',
            second: '40'
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {

        this.function();

        return (


            <div class="wrapper">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="panel panel-primary">
                                <div class="panel-body">
                                    <h1>Calculator</h1>

                                    <div className="form-group">
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input name="first" class="form-control" type="number" step="any"
                                                   value="<%= data[0] %>"
                                                   id="first" placeholder="First Number" required/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-8 col-md-8 col-lg-8">
                                            <input type="number" class="form-control" step="any" value="<%= data[1] %>"
                                                   name="second" id="second" placeholder="Second Number" required/>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Addition</button>
                                    <button type="submit" formaction="/subtract" class="subtract">Subtract</button>
                                    <button type="submit" formaction="/divide" class="divide">Division</button>
                                    <button type="submit" formaction="/multiply" class="multiply">Multiplication
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
