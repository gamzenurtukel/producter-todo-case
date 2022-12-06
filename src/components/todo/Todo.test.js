import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "../todoForm";
import TodoList from "../todoList/TodoList";
import Todo from "./Todo";
import * as reactRedux from "react-redux";
import { getSelectedTodo } from "../../redux/slice/todoSlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("<Todo />", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(getSelectedTodo));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  it("does dispatch", () => {
    const onClick = jest.fn();
    useDispatchMock.mockReturnValue(onClick);

    expect(onClick).not.toHaveBeenCalled();

    render(
      <button className="btn-clear-all" onClick={onClick}>
        clear all
      </button>
    );
    fireEvent.click(screen.getByText("clear all"));
    expect(onClick).toHaveBeenCalled();
  });

  test("should be correcly", () => {
    render(<Todo />);
    const header = screen.getByText("Daily To Do List");
    expect(header).toBeInTheDocument();
    expect(<TodoForm />).toBeDefined();
    expect(<TodoList />).toBeDefined();
  });
});
