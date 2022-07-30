import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Login from "../components/Login";
import {handleInitialData} from "../actions/shared";

describe("Login", () => {
    it("test the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('test submit button', async () => {
        await store.dispatch(handleInitialData());

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        const employeepollsElement = wrapper.getByTestId("employee-polls");
        const usernameInputElement = wrapper.getByTestId("username");
        const passwordInputElement = wrapper.getByTestId("password");
        const submitButtonElement = wrapper.getByTestId("submit");
        expect(employeepollsElement).toBeInTheDocument();
        expect(usernameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
        expect(submitButtonElement).toBeInTheDocument();

        fireEvent.change(usernameInputElement, {target: {value: 'sarahedo'}});
        fireEvent.change(passwordInputElement, {target: {value: '12341234'}});
        expect(usernameInputElement.value).toBe("sarahedo");
        expect(passwordInputElement.value).toBe("12341234");
        fireEvent.click(submitButtonElement); 
        expect(employeepollsElement).toBeInTheDocument();
        expect(usernameInputElement.value).toBe("");
        expect(passwordInputElement.value).toBe("");
    });
});
