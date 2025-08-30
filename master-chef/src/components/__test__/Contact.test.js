import { render, screen } from "@testing-library/react";
import Contact from '../Contact';
import "@testing-library/jest-dom";


// describe is used to group multiple test cases
describe("Contact Us page test cases", () => {

    // it and test are same 

    beforeAll(() => {
        // console.log("Before All");
    });

    beforeEach(() => {
        // console.log("Before Each");
    });

    afterAll(() => {
        // console.log("After All");
    });

    afterEach(() => {
        // console.log("After Each");
    });

    it("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    test("Should load button in component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });

    test("Should have 2 inputs in component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        
        expect(inputBoxes.length).toBe(2);
    });
});

