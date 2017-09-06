import React, {Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'

export default class Registration extends Component {

  constructor(props){
    super(props)
    //initial state
    this.state = {}
  }

  handleInputChange(e){
    //update state with current value of <input>s
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    const {first,last,email,password} = this.state
    if(!(first&&last&&email&&password)){
      return this.setState({
        error: 'All fields are required'
      })
    }
    axios.post('/register',this.state)
    .then(()=>{
      location.replace('/')
    })
    .catch((err)=>{
      return this.setState({
        error: 'Something went wrong. Please try again!'
      })
    })
  }

  render(){
    return (
      <div>
        <h4 className="text-error">{this.state.error}</h4>
        <input name="first" onChange={e=>this.handleInputChange(e)} placeholder="First Name"/>
        <input name="last" onChange={e=>this.handleInputChange(e)} placeholder="Last Name"/>
        <input name="email" onChange={e=>this.handleInputChange(e)} placeholder="Email"/>
        <input name="password" onChange={e=>this.handleInputChange(e)} placeholder="Password"/>
        <button onClick={e=>this.handleSubmit(e)}>Submit</button>
        <Link to='/login'>Login</Link>
      </div>
    )
  }

}
