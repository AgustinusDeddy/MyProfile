import React, { Component } from 'react'
import Sidebar from './Sidebar'
import {getEducations} from '../api'
import { Route, Link } from 'react-router-dom'

export default class Educations extends Component {

    state = {
        educations: [],
        loading: true,
    }

    componentDidMount () {
        const { location } = this.props

        getEducations()
            .then((educations) => {
                this.setState(() => ({
                loading: false,
                educations,
                }))
            })
    }

    render(){

        const { loading, educations } = this.state
        const { location, match } = this.props

        return (
            <div className= 'panel firstPanel two-column col-md-8 col-md-offset-2'>
                <Sidebar
                    loading={loading}
                    title='Educations'
                    list={educations.map((e) => (
                        {
                            'id':e.id,
                            'text': e.degree     
                        }
                    ))}
                    {...this.props}
                />

                {loading === false && location.pathname === '/educations'
                    ? <div className='sidebar-instruction'>Select a degree</div>
                    : null}
                
                <Route path={`${match.url}/:educationId`} render={ ({match}) => {
                    if(loading === true)
                        return null
                    
                    console.log(match);
                    const {degree, institution, period, results} = educations.find( (edu) => edu.id == match.params.educationId )

                    return (

                        <div className='panel text-center col-md-9 pull-right'>
                            <h4>{degree}</h4> 
                            <h5>{institution}</h5>
                            <h5>{period}</h5>
                            <h6>{results}</h6>
                            {/* <div className="text-left">
                                <ul style={{listStyleType: 'square'}}>
                                {description.map((d) => (                     
                                    <li className="description">
                                        {d}
                                    </li>
                                ))}
                                </ul>
                            </div> */}
                            
                        </div>              
                    )
                }} />
            </div>        
        )
    }
}