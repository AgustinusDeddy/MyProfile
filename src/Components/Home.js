import React, { Component } from 'react'
import {getProfiles, getEducations, getCertifications} from'../api'
import WorkExperience from './WorkExperience'
import {Link} from 'react-router-dom'
import CertsAndTrainings from './CertsAndTrainings'

export default class Home extends Component {

    state = {
        profile : {},
        works: {},
        edus: [],
        certs : []
    }

    componentDidMount () {
        getProfiles()
            .then((profile) => this.setState( () => ({
                profile
            })))

        getEducations()
            .then((edus) => this.setState( () => ({
                edus
            })))

        getCertifications()
            .then((certs) => this.setState( () => ({
                certs
            })))
    }

    render(){

        const {profile, edus, certs} = this.state;
        
        return (           
            <div className='panel text-center firstPanel col-md-4 col-md-offset-4'>
                <img className='avatar' src={`${profile.photo}`} alt={`${profile.name}'s photo`} />
                <h3 className='text-center'>
                    I'm {profile.name}
                </h3>
                <h4 className='header text-center'>{profile.position}</h4>
                <ul>
                    <li className='text-center'>
                        <i className='fa fa-map-marker'> </i>  {profile.domisili}                    
                    </li>
                    <li className='text-center'>
                        <i className='fa fa-envelope'> </i>  <a href={`mailto:${profile.email}`}>{profile.email}</a>                 
                    </li>
                    {/* <li className='text-center'>
                        <i className='fa fa-phone'> </i>  +60166070273                   
                    </li> */}
                    <li className='text-center'>
                        <i className='fa fa-lg fa-github fa-2x'> </i>  {profile.github}                   
                    </li>
                    <li className='text-center'>
                        <i className='fa fa-lg fa-linkedin fa-2x'> </i>  {profile.linkedin}                   
                    </li>
                </ul>

                <WorkExperience/>

                <div className="panel panel-primary text-left">
                    <div className="panel-heading">Educations</div>
                    <ul className="list-group">
                        {edus.map((e) => (                     
                            <li className="list-group-item" key={e.id} style={{listStyleType: 'none'}}>
                                <Link  to={`/educations/${e.id}`}>
                                    {e.degree} - {e.institution} ({e.period})
                                </Link>
                            </li>
                        ))}
                    </ul>               
                </div>

                <CertsAndTrainings cts={certs}/>
            </div>           
            
        )
    }
}