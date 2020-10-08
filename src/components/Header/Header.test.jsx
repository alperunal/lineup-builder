import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import StoreContext from '../../store';

it('should render Header correctly', () => {
    const HeaderComponent = () => (
        <StoreContext.Provider
            value={{
                language: 'en',
                theme: 'light',
                changeLanguage: jest.fn(),
                changeTheme: jest.fn(),
            }}
        >
            <Header />
        </StoreContext.Provider>
    );
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.dive()).toMatchSnapshot();
});
