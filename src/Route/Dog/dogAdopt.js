import React,{Component} from 'react'
import './dogAdopt.css'
import config from '../../config'


class dogAdopt extends Component{
  state={
    adoptedList:[],
    OpenForAdopt:{},
    peopleList:[],
    people:'',
    isAdopted:false,
    seeAdopted:false,
    error:null
}

  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/dogs/`, {
      method:'GET',
     headers: {
       'content-type': 'application/json',
     },
   })
     .then(res =>
       (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
     ).then(
       data=>{
         this.setState({OpenForAdopt:data})
       }
     )
     fetch(`${config.API_ENDPOINT}/people/`, {
      method:'DELETE',
     headers: {
       'content-type': 'application/json',
     },
   })
     .then(res =>
       (!res.ok)
         ? res.json().then(e => Promise.reject(e))
         : res.json()
     ).then(
       data=>{
         this.state.peopleList.push(data.name)
       }
     )
     
  }

  handleAdoptAnimal=()=>{
    fetch(config.API_ENDPOINT + `/dogs/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',       
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
       return res.json()
      })
      .then(data => {
        console.log(data,'test delete data')
        
        
        this.state.adoptedList.push(data)
        
        
        return data
      })
      .then(()=>{
        fetch(`${config.API_ENDPOINT}/dogs/`, {
          method:'GET',
         headers: {
           'content-type': 'application/json',
         },
       })
         .then(res =>
           (!res.ok)
             ? res.json().then(e => Promise.reject(e))
             : res.json()
         ).then(
           data=>{
             this.setState({OpenForAdopt:data})
           }
         )
         .then(()=>fetch(`${config.API_ENDPOINT}/people/`, {
          method:'DELETE',
         headers: {
           'content-type': 'application/json',
         },
       })
         .then(res =>
           (!res.ok)
             ? res.json().then(e => Promise.reject(e))
             : res.json()
         ).then(
           data=>{
             this.state.peopleList.push(data.name)
           }
         ))
      }

      )
      .catch(error => {
        console.error(error,'test error')
        this.setState({error:error})
      })
  }
    
  
  render(){
    const dogName=this.state.OpenForAdopt.name
    const dogImageUrl = this.state.OpenForAdopt.imageURL
    const Sex = this.state.OpenForAdopt.sex
    const Age = this.state.OpenForAdopt.age
    const Breed = this.state.OpenForAdopt.breed
    const Story = this.state.OpenForAdopt.story

console.log(this.state.adoptedList,'test list')
      console.log(this.state.peopleList)
      const adoptedList = this.state.adoptedList.map((animal,index)=>      
        <div className='adopted_animals_owners' key={index}>        
          <img src={animal.imageURL} alt={animal.name}/>        
            {animal.name} is dopted by
            {this.state.peopleList[index]}
        </div>
      )
      const message = this.state.error?'No animal is available':''


    return(
      <div className='dogAdopt'>
          
      <div>Currently Available {dogName}</div>     
      
      <div className='dogAdopt__profile'>
      <div className='dog_image'>
          <img src={dogImageUrl}alt={dogName}/>
        </div>


        <div className='dog_profile_detail'>
          <div >
            sex: {Sex}
          </div>
          <div>
            age: {Age}
          </div>
          <div>
            breed: {Breed}
          </div>
          <div>
            story: {Story}
          </div>
        </div>
       
      </div>
        <button type='button' onClick={this.handleAdoptAnimal}>
          Let's Home {dogName}
        </button>
        <button type='button' onClick={this.setSeeAdopted}>
          See Adopted
        </button>

        <div className='is_adopt_available'>
          {message}
        </div>

        <div className='adopted_list'>
            {adoptedList}
        </div>
  </div>
    )
  }
}

export default dogAdopt

