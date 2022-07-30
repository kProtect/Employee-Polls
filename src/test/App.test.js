import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import {setAuthedUser} from "../actions/authedUser";

describe("App", () => {
    it("Test the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("Test Logine when not logged in", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        const EmployepollsTest = component.getByTestId("employee-polls");
        expect(EmployepollsTest).toBeInTheDocument();
    });

    it("Test Dashboard when logged in", () => {
        store.dispatch(setAuthedUser({id: "", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );

        const EmployepollsTest = component.getByTestId("EmployepollsTest");
        expect(EmployepollsTest).toBeInTheDocument();
    });
});
