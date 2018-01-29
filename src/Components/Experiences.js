import React, { Component } from 'react'
import Sidebar from './Sidebar'
import {getExperiences} from '../api'
import { Route } from 'react-router-dom'

export default class Experiences extends Component {

    state = {
        experiences: [],
        loading: true,
    }

    componentDidMount () {
        // const { location } = this.props
        console.log(this.props, "DidMount");
        getExperiences()
            .then((experiences) => {
                this.setState(() => ({
                loading: false,
                experiences,
                }))
            })
    }

    render(){

        const { loading, experiences } = this.state
        const { location, match } = this.props

        // console.log(this.props, "Experiences")

        return (
            <div className= 'panel firstPanel two-column col-md-8 col-md-offset-2'>
                <Sidebar
                    loading={loading}
                    title='Experiences'
                    list={experiences.map((e) => (
                        {
                            'id':e.id,
                            'text': e.position + ' - ' + e.company      
                        }
                    ))}
                    {...this.props}
                />

                {loading === false && location.pathname === '/experiences'
                    ? <div className='sidebar-instruction'>Select an experience</div>
                    : null}
                
                <Route path={`${match.url}/:experienceId`} render={ ({match}) => {
                    if(loading === true)
                        return null
                    
                    // console.log(match);
                    const {position, company, period, description} = experiences.find( (exp) => exp.id === parseInt(match.params.experienceId, 10) )

                    return (

                        <div className='panel text-center col-md-9 pull-right'>
                            <h4>{position}</h4> 
                            <h5>{company}</h5>
                            <h5>{period}</h5>
                            <div className="text-left">
                                <ul style={{listStyleType: 'square'}}>
                                {description.map((d) => (                     
                                    <li className="description" key={d}>
                                        {d}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            
                        </div>              
                    )
                }} />
            </div>
        )
    }
}