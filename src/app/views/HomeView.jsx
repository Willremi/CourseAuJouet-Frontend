import React from 'react'
import { hasRole } from './../shared/services/accountServices';
import { ROLE_ADMIN } from './../shared/constants/rolesConstant';
import { URL_ADMIN_HOME } from './../shared/constants/urls/urlConstants';
import  Carousel  from '../components/layouts/carousel/Carousel';
import { CarouselData } from '../components/layouts/carousel/CarouselData';

const HomeView = ({ history }) => {
    return (
        <div>
            <Carousel  />            
            {/* { hasRole(ROLE_ADMIN) && (
                <button className="btn btn-primary" onClick={() => history.push(URL_ADMIN_HOME)}>
                    Admin
                </button>
            )} */}
        </div>
    )
}

export default HomeView
