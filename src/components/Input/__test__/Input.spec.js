import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Input from '../Input';
import Form from '../../Form/Form';
import Button from '../../Button/Button';

describe("Input component", () => {
  it("should render Input correctly", () => {
    render(<Input />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  it("should render props correctly", () => {
    const e = {target: {value: 'value'}}
    const handleNameChange = jest.fn(() => {
        return e.target.value
    }); 
    const name = "";
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
    expect(handleNameChange).toHaveBeenCalledWith("Mary Smith")

  });
  it.only("should throw error when fields are empty", () => {
    render(<Router><Form></Form></Router>)
    const form = screen.getByTestId("form")
    fireEvent.submit(form)
    const errorArray = screen.getAllByText("This field is required")
    expect(errorArray).toHaveLength(3)
  })

});
