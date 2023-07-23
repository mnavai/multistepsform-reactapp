import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';

describe("Input component", () => {
  it("should render Input correctly", () => {
    render(<Input />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  it("should render props correctly", () => {
    const handleNameChange = jest.fn(); 
    const name = "Mary Smith";
    const submitted = true;
    render(
      <Input
        labelName="Name"
        id="name"
        placeholder="e.g. Stephen King"
        type="text"
        onChange={handleNameChange}
        value={"Mary Smith"} // Provide a valid name value for testing
        error={!name && submitted ? "This field is required" : ""}
      />
    );
    const label = screen.getByText("Name"); // Find the label based on its text content
    expect(label.innerHTML).toEqual("Name");
    const input = screen.getByTestId("input")
    expect(input).toHaveAttribute("id","name")
    expect(input).toHaveAttribute("placeholder","e.g. Stephen King")
    expect(input).toHaveAttribute("type","text")
    fireEvent.change(input,{ target: {value: "Mary Smith"}})
    expect(handleNameChange).toHaveBeenCalledTimes(1)
    expect(handleNameChange).toHaveBeenCalledWith("Mary Smith")
  });

});
