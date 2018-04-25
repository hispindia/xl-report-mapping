import React from 'react';
import ReactDOM from 'react-dom'
import dhis2API from './lib/dhis2API'

import {App} from './components/app';


window.onload = function(){

   
    dhis2API.getManifest().then(function(data){
        ReactDOM.render(
                <App baseURL={data.activities.dhis.href}/>
            ,
            document.getElementById('reportContainer'));
        
        
    })
    
  
}
