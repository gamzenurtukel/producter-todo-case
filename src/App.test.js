import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Todo from "./components/todo";

describe("<App/>", () => {
  const initialState = {
    todos: [],
  };
  const mockStore = configureStore();
  let store;
  test("App render", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(<Todo />).toBeDefined();
  });
});
