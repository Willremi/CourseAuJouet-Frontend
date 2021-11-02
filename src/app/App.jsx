import React from 'react';
import { Provider } from 'react-redux';
import Navbar from '../components/header/Navbar';
import RoutesWithNavigation from './routes/RoutesWithNavigation';
import { store } from './shared/redux-store/store';


/**
 * Component APP
 * with: 
 * 	- creation of redux store
 * 
 * @author Peter Mollet
 */
const App = () => {
    return (
        <Provider store={ store }>
			{/* <RoutesWithNavigation/> */}
            <Navbar />
		</Provider>
    );
};

export default App;