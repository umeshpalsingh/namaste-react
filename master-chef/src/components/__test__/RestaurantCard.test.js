import { render, screen } from "@testing-library/react"
import RestaurantCard, {withVegLabel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/mockData.json"
import "@testing-library/jest-dom"

test('should render RestaurantCard component with props data', () => {
  render(<RestaurantCard restaurant={MOCK_DATA} />);

  const name = screen.getByText("The Belgian Waffle Co.");

  expect(name).toBeInTheDocument();
});

test('should render RestaurantCard component with Veg label', () => {

  const RestaurantCardWithVegLabel = withVegLabel();
  render(<RestaurantCardWithVegLabel restaurant={MOCK_DATA} />);

  const vegLabel = screen.getByText("Veg");

  expect(vegLabel).toBeInTheDocument();
});
