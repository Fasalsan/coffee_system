import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = 'Category'

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = + `/${crumb}`

            return (
                <div key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        });
        console.log("--",crumbs);
    return (
        <div>{crumbs.length > 0 ? crumbs: "Category"}</div>
    )
}
