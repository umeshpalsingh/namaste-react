import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResCardData.json";
import "@testing-library/jest-dom";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    }) 
})

test("Search Functionality Test", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    
    const searchBtn = screen.getByTestId("search-btn");

    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    
    fireEvent.change(searchInput, {target: {value: "pizza"}});
    
    fireEvent.click(searchBtn);

    const resCard = await screen.findAllByTestId("resCard"); 

    expect(resCard.length).toBe(1);

});

test("Top Rated Restaurant Functionality Test", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const CardsBeforeFilter = await screen.findAllByTestId("resCard"); 

    expect(CardsBeforeFilter.length).toBe(8);
    
    const topratedbtn = screen.getByTestId("toprated-btn");

    expect(topratedbtn).toBeInTheDocument();
    
    fireEvent.click(topratedbtn);
        
    const CardsAfterFilter = await screen.findAllByTestId("resCard"); 

    expect(CardsAfterFilter.length).toBe(1);

});