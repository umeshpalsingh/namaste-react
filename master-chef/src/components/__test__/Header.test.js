import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header with a login button", () => {
  // render
  render(
    <BrowserRouter> 
        <Provider store={appStore}> 
            <Header />
        </Provider>
    </BrowserRouter>
  );

  // query 
  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "Logout"});

  const cartItems = screen.getByText(/Cart/);

  // assertion
  expect(logoutButton).toBeInTheDocument();
});
