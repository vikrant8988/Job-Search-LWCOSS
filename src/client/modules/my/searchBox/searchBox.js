import LightningElementWithBootstrap from '../../lib/lightningElementWithBootstrap'

export default class SearchBox extends LightningElementWithBootstrap {

    x=10;

    searchFields={
        description:'',
        location:'',
        full_time:false
    }

    changeHandler(event){
        const {name, value, checked} = event.target
        if(name === 'full_time'){
            this.searchFields[name] = checked
        }else{
            this.searchFields[name] = value
        }
    }

    searchHandler(){
        this.dispatchEvent(new CustomEvent("filtersearch",{
            detail:this.searchFields
        }))
        
    }
}
