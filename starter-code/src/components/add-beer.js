import React, { Component } from 'react';
// import BeerDetail from './beer-detail';
import axios from 'axios';
import Navbar from './nav';
import qs from 'qs';

class AddBeer extends Component {
    constructor() {
        super()

        // this.nameInput = this.nameInput.bind(this);
        // this.taglineInput = this.taglineInput.bind(this);
        // this.descriptionInput = this.descriptionInput.bind(this);
        // this.attenuationLevelInput = this.attenuationLevelInput.bind(this);
        // this.brewersTipsInput = this.brewersTipsInput.bind(this);
        // this.contributedByInput = this.contributedByInput.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            response: 0 ,
            tempBeer: {
                name:"",  
                tagline : "", 
                description: "",  
                first_brewed : "", 
                brewers_tips  : "",
                attenuation_level: 0,  
                contributed_by: "" 
            }, 
            newBeer:{}   
        }
    }

    // nameInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.name = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy 
    //     })
    //   }
    
    // taglineInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.tagline = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }
   
    // descriptionInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.description = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }

    // firstBrewedInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.first_brewed = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }

    // brewersTipsInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.brewers_tips = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }

    // attenuationLevelInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.attenuation_level = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }

    // contributedByInput = (event) => {
    //     let tempBeerCopy = {...this.state.tempBeer};
    //     tempBeerCopy.contributed_by = event.target.value;
    //     this.setState({
    //         tempBeer: tempBeerCopy
    //     })
    //   }

    handleInputChange (event) {
        debugger
        let temp_beer = {...this.state.tempBeer};
        temp_beer[event.target.name] = event.target.value;
        this.setState({tempBeer:temp_beer})
    }

    handleFormSubmit(event) {
        event.preventDefault();
        // console.log(this.state.tempBeer)
        debugger
        axios({
            method: "POST",
            url: "https://ih-beers-api.herokuapp.com/beers/new", 
            data: qs.stringify(this.state.tempBeer) ,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => {
            console.log(response)
            this.props.history.push(`/beer-detail/${response.data._id}`)
            // this.setState({response: response.status, newBeer: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        // debugger
        // if (this.state.response === 200) {return(
        //     <div>
        //         <BeerDetail beer={this.state.newBeer}/>
        //     </div>
        // )} else {
            return (          
                <div>
                    <Navbar />
                    <div className= "add-form">                  
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="name" 
                                        value={this.state.tempBeer.name} 
                                        onChange={this.handleInputChange}/>   {/* the handler gets the event object by default */}
                                </div>
                            </div>
                            
                            
                          
                            <div className="field">
                                <label className="label">Tagline:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="tagline" 
                                        value={this.state.tempBeer.tagline} 
                                        onChange={this.handleInputChange}/>
                                </div>
                                
                            </div>
                            <div className="field">
                                <label>Description:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="description" 
                                        value={this.state.tempBeer.description} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            
                            
                            <div className="field">
                                <label>First_brewed:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="date" 
                                        name="first_brewed" 
                                        value={this.state.tempBeer.first_brewed} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label>Brewers_tips:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="brewers_tips" 
                                        value={this.state.tempBeer.brewers_tips} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>

                            
                            <div className="field">
                                <label>Attenuation_level:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="number" 
                                        name="attenuation_level" 
                                        value={this.state.tempBeer.attenuation_level} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>

                            
                            <div className="field">
                                <label>Contributed_by:</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="contributed_by" 
                                        value={this.state.tempBeer.contributed_by} 
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div class="control">
                                <input class="button is-link" type="submit" value="Submit" />
                            </div>
                            
                            
                            
                        </form>
                        
                    </div>
                </div>
            )
        // }
        
  
    }
}


export default AddBeer;
