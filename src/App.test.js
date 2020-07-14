import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Charts from './pages/Charts';
import App from './App';

it('renders correct routes', () => {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});

    expect(pathMap['/charts']).toBe(Charts);
});