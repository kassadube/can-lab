import React from "react";
import moment from "moment";
import axios from "axios";

export class Header extends React.Component {
    getDataURL = "http://207.232.46.92/reactmvc/home/TestData";
        
    constructor(props) {
        super();
        this.state = {
            version: props.version,
            numOfVehicles: props.numOfVehicles,
            lastDBUpdate: moment(props.lastDBUpdate).format("DD/MM/YYYY")
        };       
        console.log("Constructor");
    }
    componentDidMount()
    {
        console.log("componentDidMount");
        this.initData();
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        nextState.lastDBUpdate = moment(nextState.lastDBUpdate).format("DD/MM/YYYY");
        console.log("should Component Update" , nextProps, nextState);
        return true;
    }

    initData () {
          var self = this;
          axios.get(this.getDataURL)
            .then(function (response) {
              console.log( response.data);
             // self.setState({version: response.data.version});
              self.setState({...response.data});
            })
            .catch(function (error) {
              console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div class="row bg-1 ">
                    <div class="col-md-6 col-md-offset-3 H70 ">
                        <h1 class="text-center PT10">Supported Vehicle Data base</h1>
                    </div>
                </div>
                <div class="row bg-1 row-no-padding">
                    <div class="col-xs-4 ">
                        <div class="row">
                            <div class="col-xs-5 brd text-center"> <span class="PT3"> Version:</span> <span>{ this.state.version }</span></div>
                            <div class="col-xs-7 brd text-center"> <span class="text-center PT3"> DB last updated:</span> <span>{ this.state.lastDBUpdate }</span></div>
                        </div>
                    </div>
                    <div class="col-xs-4 brd text-center">
                        <span class="text-center PT3">total numbers of vehicles in DB:</span> <span>{ this.state.numOfVehicles }</span>
                    </div>
                    <div class="col-xs-3 brd text-center">
                        <p class="text-center PT3"> Sampling Request Form:</p>
                    </div>
                    <div class="col-xs-1 brd">
                        <p class="text-center PT3"> Info:</p>
                    </div>
                </div>
            </div>
        );
    }
}
