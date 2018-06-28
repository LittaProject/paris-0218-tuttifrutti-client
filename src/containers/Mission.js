import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import MissionPrice from '../components/MissionPrice.js'
import MissionStudent from '../components/MissionStudent.js'
import MissionDescription from '../components/MissionDescription.js'
import './style/Mission.css'

class Mission extends React.Component {
        state = {
            id: '',
            name: '',
            field: '',
            deadline: '',
            price: '',
            description: ''
        }

    componentDidMount() {
        console.log(window.location.pathname)
        const missionId = window.location.pathname
        axios.get(`http://localhost:3030${missionId}`)
            .then(console.log('ok'))
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    name: res.data.name,
                    field: res.data.field,
                    deadline: res.data.deadline,
                    price: res.data.price,
                    description: res.data.description
                })
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <MissionTitle text={this.state.name} />
                <MissionId text={this.state.id} />
                <MissionField text={this.state.field} />
                <MissionDeadline text={this.state.deadline} />
                <MissionPrice text={this.state.price} />
                <MissionStudent text='Non attribué' /> {/* {this.state.student} */}
                <MissionDescription text={this.state.description} />
                <div className='buttons-mission'>
                    <Button>Ajouter un document</Button>
                    <Button>Envoyer un message</Button>
                </div>
            </div>
        )
    }
}

export default Mission
