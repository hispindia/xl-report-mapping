import React,{propTypes} from 'react';
import { BrowserRouter as Router , Route, Link,Switch,Redirect  } from 'react-router-dom'

import {ReportList} from './reportList'
import {EditReportForm} from './editReportFormX'
import {NewReportForm} from './newReportForm'

import dhis2API from '../lib/dhis2API'



export function App(props){
    
    var instance = Object.create(React.Component.prototype)
    var state = {
        reportName : [],
        count: 0
    };
    function getRout() {
        var baseName = props.baseURL.split("/")

        baseName = baseName[baseName.length-1];
        dhis2API.getManifest().then(function (data) {
            if(state.count ===0){
                console.log("data.name: " + data.name);
                state.reportName = data.name;
                state.count = state.count + 1;
                instance.setState(Object.assign({}, state));
            }
        })
        if (state.count !== 0){
        console.log(state.reportName);
        return(<Router basename={baseName+"/api/apps/"+state.reportName+"/index.html#"} >
            <Switch>
                <Route exact path="/reports"  component={ReportList}  />
                <Route exact path="/reports/add"  component={NewReportForm}  />
                <Route path="/reports/edit/"  component={EditReportForm}  />

            </Switch>

        </Router>)
        }

    }

    instance.render = function(){

        return (
            <div>
            {getRout()}
            </div>
               )
    }
    return instance
}
