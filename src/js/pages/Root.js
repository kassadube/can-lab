import React from "react";
import {Header} from "../components/Header";
import {SearchBar} from "../components/Searchbar";

export class Root extends React.Component {

    render() {
        return (
        <div>
           <Header version="1.1.1" lastDBUpdate={Date()} numOfVehicles={27}/>
           <div class="row H350"></div>
           <SearchBar/>
        </div>
        );
    }
}
