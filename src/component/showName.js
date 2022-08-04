import { Center , Modal} from '@mantine/core';
import React, { Component } from 'react'
// import { Modal } from 'react-responsive-modal';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"



export default class ShowName extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            updateName: "",
            open: false,
            user:null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.isClose = this.isClose.bind(this)
        this.editName = this.editName.bind(this)


    }


    handleChange(ev) {
        console.log(414, ev)
        this.setState({ updateName: ev.target.value })
    }

    isClose() {

    }

    editName(id,name) {
        console.log(1232,id, name)
        this.setState({user : id, open: true, visible: true, updateName: name })
    }

    componentDidMount() {
        this.setState({ getPost: this.props.post })
        
    }

    onClickButton = e => {
        this.editName(this.props.item.name)
    }

    onCloseModal = () => {
        console.log(1212)
        this.setState({ open: false })
        this.setState({ visible: false })
    }

    render() {
        return (
            
            <div><Center>
                 {this.state.visible ?
                    <div>
                      <Modal
                      opened={this.state.open}
                        onClose={() => this.setState({visible : false,open:false})}
                       title="Introduce yourself!"
                       >   
                      <h1>Please Edit Name</h1>
                      <input value={this.state.updateName} onChange={(e) => { this.handleChange(e) }} />
                      <button onClick={() => { this.props.updateNewName(this.state.user, this.state.updateName) }}>Update</button>

                      </Modal>
                     </div>
                    :
                    <div>
                    <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Update</th>
                                </tr>
                            </thead>
                    
                            <tbody>
                              { 
                              this.props.item.map((value)=>{
    
                             return(
                          
                                <tr>
                                <td scope="row">{value.id}</td>
                                <td>{value.name}</td>
                                <td>  <button onClick={() => this.props.deleteName(value.id)}>Delete</button></td>
                                <td> <button onClick={ () => this.editName(value.id,value.name)}>Edit Via Modal</button> </td>
                            </tr>
                      
                             )
                              })
                              }
                           </tbody>
                        </table>
                    </div>
                }
                    
                    </Center>
            </div>
        )
    }
}
