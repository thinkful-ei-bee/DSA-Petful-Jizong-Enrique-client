import React,{Component} from 'react'
import './dogAdopt.css'
import config from '../../config'


class dogAdopt extends Component{
  
  handleGetAnimal=()=>{
    
      return fetch(`${config.API_ENDPOINT}/dog`, {
        headers: {
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    
  }

  handleAdoptAnimal=()=>{
    fetch(config.API_ENDPOINT + `/dog/delete`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',       
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
       
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.error(error)
      })
  }
    
  
  render(){
      const dogName='Dog'
      const dogImageUrl = 'https://www.rd.com/wp-content/uploads/2018/05/shutterstock_1062336044.jpg'
      const Sex = 'Female'
      const Age = '3 years'
      const Breed = 'Siamese'
      const Story = 'Abandoned by previous owner.'




    return(
      <div className='dogAdopt'>
          <div>{dogName}</div>     
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
            <button type='button'>
              Let's Home {dogName}
            </button>
      </div>
    )
  }
}

export default dogAdopt

