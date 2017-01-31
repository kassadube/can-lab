import React from "react";

import axios from "axios";

export class SearchBar extends React.Component {
    searchURL = "http://localhost/reactmvc/home/SubmitTest";
    constructor(props) {
        super();
        this.state = {
           
        };        
        console.log("Constructor");
    }
    handleAjaxFormSubmit(event)
    {
        event.preventDefault();
        let formData = new FormData(event.target);
      //formData.forEach((key, value) => console.log(value, key));
        axios.post(this.searchURL, formData).then(()=>console.log('dddddd'));
        console.log('ddd');
       
    }
    render() {
        return (
            <div class="row">
                <div class="col-md-6 col-md-offset-3 H50 ">
                    <form id="formOne" class="form-inline" action="" onSubmit={this.handleAjaxFormSubmit.bind(this)} >
                        <div class="form-group">
                            <input type="text" class="form-control" name="brand" id="brand" placeholder="Brand"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="model" id="model" placeholder="Model"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="engineType" id="engineType" placeholder="Engine Type"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="manufactureYear" id="manufactureYear" placeholder="Manufacture Year"/>
                        </div>                  
                    <button type="submit" class="btn btn-danger">SEARCH</button>
                    </form>
                </div>
        </div>
        
        );
    }
}
