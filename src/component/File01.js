import React, { Component } from 'react'
import ShowName from './showName';

export default class File01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getPost:props.post,
            newName:"", 
        }
        this.handleChange=this.handleChange.bind(this)
        this.addName=this.addName.bind(this)
        this.deleteName=this.deleteName.bind(this)
        this.updateNewName=this.updateNewName.bind(this)
        
    }

    handleChange(e){
        console.log(111,e.target.value)
    this.setState({newName:e.target.value})
    }
    addName(){
    //  const id=this.state.getPost.length +1;
    //  console.log(id)
    //  let addName = {}          //for understanding by mam
    //  addName.id=id;
    //  addName.name=this.state.newName;
    //  console.log(addName.name)
    //  this.state.getPost.push(addName)
    //  this.setState({ getPost: this.state.getPost })
    const data = {
        id:this.state.getPost.length +1,
        name : this.state.newName,
    }
    this.state.getPost.push(data)
    this.setState({ getPost: this.state.getPost })
    console.log(this.state.getPost );
    }

    deleteName(id){
        alert("Delete Id No : "+id)
        this.setState({getPost:this.state.getPost.filter((item)=>{return item.id!=id})})
    }


    updateNewName(id,name){
        console.log(444, id, name)
        const updated = this.state.getPost.find(item => item.id==id)
        updated.name = name
        const filterName = this.state.getPost.filter((item)=>{
            if (item.id == id) {
                return updated
            }
            else {
                return item
            }
    
        })
        this.setState({ getPost: filterName })
    }
    

    render() {
        return (
            <center>
                 <h1> CRUD Operation </h1>
               <input onChange={this.handleChange}/>
               <button onClick={this.addName}>Add Name</button>

               
            <ShowName item={this.state.getPost} visible={this.state.visible}deleteName={this.deleteName} updateNewName={this.updateNewName}/>
               
            </center>
        )
    }
}
