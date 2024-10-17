import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = + `/${crumb}`

            return (
                <div>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })
    return (
        <div>{crumbs}</div>
    )
}
