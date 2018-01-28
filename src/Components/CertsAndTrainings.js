import React from 'react'
import PropTypes from 'prop-types';

export default function CertsAndTrainings ({cts}) {
    return (
        <div className="panel panel-primary text-left">
            <div className="panel-heading">Certifications and Trainings</div>
            <ul className="list-group">
                {cts.map((c) => (                     
                    <li className="list-group-item" key={c.name} style={{listStyleType: 'none'}}>
                        {c.name} {c.organization === '' ? '' : `(${c.organization})`} <br/> 
                         {c.institution} {(c.institution !== '' && c.period !== '') ? ' - ' : ''} {c.period}
                    </li>
                ))}
            </ul>               
         </div>
    )
}

CertsAndTrainings.propTypes = {
    cts: PropTypes.array.isRequired
}