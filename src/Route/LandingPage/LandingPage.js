import React,{Component} from 'react'
import {Link} from 'react-router-dom'

// import PetfulContext from '../../petContext'
// import dogAdopt from '../../Route/Dog/dogAdopt'
// import catAdopt from '../../Route/Cat/catAdopt'

class LandingPage extends Component{
  state={
    adopted:{}
  }
  


  render(){
    const intro = `<p>Petful understands two truths. We know that there are cats and dogs in need of rescue from harmful and unfortunate circumstances. We also 
    know that there are plenty of people out there more than willing to provide these animals a caring and loving home. We simply want to stream-line this process. 
    We bring these animals in and nurse them back to health and offer one dog and cat up for adoption at a time in the order which they arrived at Petful.<br/> Interested in
    adopting a pet? Join the Petful queue and see which lucky dog or cat you will soon have as a companion!
    </p>`
    // const contextValue ={
    //   adopted:this.state.adopted
    // }
    return(
      <div className='LandingPage'>
        <div className='LandingPage__intro'>
          {intro}
        </div>
        <div>
          <Link 
            to='/dog'
            className='dog_link'
            
            > Dog 
          </Link>
          <Link 
            to='/cat'
            className='cat_link'
            onClick={this.handleGetCat}
            > Cat 
          </Link>
        </div> 
        
      </div>
    )
  }
}

export default LandingPage