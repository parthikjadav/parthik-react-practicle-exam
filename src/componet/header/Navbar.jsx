import React from 'react'
import { navdata } from './navdata'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav text-danger me-auto mb-2 mb-lg-0">
                            {
                                navdata.map((value, index) => {
                                    return (
                                        <li class="nav-item">
                                            <Link class="nav-link" to={`${value.path}`}>{value.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar