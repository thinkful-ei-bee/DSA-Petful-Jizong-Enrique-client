import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
// import PetfulContext from '../../petContext'
// import dogAdopt from '../../Route/Dog/dogAdopt'
// import catAdopt from '../../Route/Cat/catAdopt'

class LandingPage extends Component{
  state={
    adopted:{}
  }
  


  render(){
<<<<<<< HEAD
    const intro = `Petful understands two truths. We know that there are cats and dogs in need of rescue from harmful and unfortunate circumstances. We also
   know that there are plenty of people out there more than willing to provide these animals a caring and loving home. We simply want to stream-line this process.
   We bring these animals in and nurse them back to health and offer one dog and cat up for adoption at a time in the order which they arrived at Petful.Interested in
   adopting a pet? Join the Petful queue and see which lucky dog or cat you will soon have as a companion!
   `
||||||| merged common ancestors
    const intro = `Eveniet quis eius temporibus. Ut est non animi. Possimus sint eligendi laudantium commodi rerum. Sed dignissimos sed nulla sunt repellat. Veritatis voluptatem maiores ducimus impedit id. 
    Officia incidunt non minima. Eius vel est facilis. Recusandae rerum doloremque qui fuga culpa non nesciunt quia. Quos ea voluptas. Nobis est sed rem ea suscipit ex natus quia. Id iusto necessitatibus dolores nulla aspernatur nam. 
    Et voluptas vel. Nulla voluptate earum molestias. Tempore possimus quod perferendis. Voluptatum mollitia harum excepturi ullam debitis quo. 
    Natus in ut sint iste. Excepturi atque omnis. Eaque quidem minus totam eius provident tempore. Id nihil nesciunt omnis dolor et rem dolores rerum. 
    Quibusdam nihil itaque eum velit et fuga ea et. Ullam eum perspiciatis earum qui aliquid voluptatem qui. Temporibus in dolorem et. Et dolores sit cupiditate porro enim impedit voluptas cumque itaque. Quis asperiores hic quo dolores eveniet aut. Iure aut porro. 
    Quas ipsum nam ut ipsam corrupti et quaerat error voluptates. Similique quos vel est quo. Et beatae optio voluptatem porro deserunt voluptatem sed ipsa soluta. Expedita aut assumenda recusandae animi asperiores sequi.`
=======
    const intro = `<p>Petful understands two truths. We know that there are cats and dogs in need of rescue from harmful and unfortunate circumstances. We also 
    know that there are plenty of people out there more than willing to provide these animals a caring and loving home. We simply want to stream-line this process. 
    We bring these animals in and nurse them back to health and offer one dog and cat up for adoption at a time in the order which they arrived at Petful.<br/> Interested in
    adopting a pet? Join the Petful queue and see which lucky dog or cat you will soon have as a companion!
    </p>`
>>>>>>> 2fe187b59fc31a8ac819618c13a673565052bcd7
    // const contextValue ={
    //   adopted:this.state.adopted
    // }
    return(
      <div className='LandingPage'>
        <div className='LandingPage__intro'>
          {intro}
        </div>
        <div className='LandingPage__submit_link'>
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