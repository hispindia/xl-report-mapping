function localstorage(){

    this.save = function(key,value){
        localStorage.setItem(key,JSON.stringify(value));
        localStorage.setItem("dd_current_user",key)

    }
    
    
}

module.exports = new localstorage();