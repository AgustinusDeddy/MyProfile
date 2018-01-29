import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import slug from 'slug'

Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }

function CustomLink ({ to, children,asu }) {
    return (
      <Route
        path={to.pathname}
        children={({ match }) => ( 
          <Link to={to}>
            <li className="list-group-item" style={{listStyleType: 'none', backgroundColor: match ? '#428bca' : '#221f1f'}}>
              {children}
            </li>    
          </Link>       
        )}
      />
    )
  }

export default function Sidebar ({title, list, loading, location, match}){
    return loading === true
    ? <div>Loading</div>
    : <div className='col-md-3'>
        <h3 className='header'>{title}</h3>
        <ul className='sidebar-list'>
          {list.map((item) => (
            <CustomLink
              key={item.id}
              to={{
                pathname: `${match.url}/${slug(item.id)}`,
                search: location.search
              }}>
                {item.text}
            </CustomLink>
          ))}
        </ul>
      </div>
}