import React, {Component} from 'react'
import {getExperiences} from '../api'
import {Link} from 'react-router-dom'

export default class WorkExperiences extends Component {

    state = {
        experiences: []
    }

    componentDidMount() {
        getExperiences()
            .then( (experiences) => this.setState( () => ({
                experiences
            })))
    }

    render(){

        const {experiences} = this.state;

        return (
            <div className="panel panel-primary text-left">
                <div className="panel-heading">Working Experience</div>
                <ul className="list-group">
                    {experiences.map((e) => (                     
                        <li className="list-group-item" key={e.id} style={{listStyleType: 'none'}}>
                            <Link  to={`/experiences/${e.id}`}>
                                {e.position} - {e.company} ({e.period})
                            </Link>
                        </li>
                    ))}
                </ul>
                    
            </div>
        )
    }
}
