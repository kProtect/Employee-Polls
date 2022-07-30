import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import EmployeePollQuestion from "../components/EmployeePollQuestion";

describe("EmployeePollQuestion", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeePollQuestion/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("test all elements", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeePollQuestion/>
                </BrowserRouter>
            </Provider>
        );

        const optionOneTestElement = component.getByTestId("optionOneTest");
        const optionOneInputElement = component.getByTestId("optionOne");
        const optionTwoTestElement = component.getByTestId("optionTwoTest");
        const optionTwoInputElement = component.getByTestId("optionTwo");
        const submitButtonElement = component.getByTestId("submit-button");

        expect(optionOneTestElement.textContent).toBe("OptionOne");
        expect(optionTwoTestElement.textContent).toBe("OptionTwo");
        expect(submitButtonElement.textContent).toBe("Submit");

        fireEvent.change(optionOneInputElement, {target: {value: 'Blue'}});
        fireEvent.change(optionTwoInputElement, {target: {value: 'Blalck'}});
        expect(optionOneInputElement.value).toBe("Blue");
        expect(optionTwoInputElement.value).toBe("Blalck");
    });
});
