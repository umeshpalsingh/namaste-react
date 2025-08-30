import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it('should Load Restaurant Menu Component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Veg Pizza (13)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("fooditems").length).toBe(13)

    const addBtns = screen.getAllByRole("button", {name: "Add"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(15);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("fooditems").length).toBe(13);


});