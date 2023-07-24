import { fireEvent, render, screen } from '@testing-library/react';
import HeadingGroup from '../HeadingGroup';

describe("HeadingGroup component", () => {
    it("should render component correctly", () => {
        render(<HeadingGroup></HeadingGroup>)
        const hgroup = screen.getByTestId("hgroup")
        expect(hgroup).toBeInTheDocument()
    })
    it("renders props correctly", () => {
        const headingTxt = "Personal Info"
        const ptag = "Please provide your name, email address, and phone number."
        render(<HeadingGroup heading={headingTxt} ptag={ptag}></HeadingGroup>)
        const heading = screen.getByTestId("heading")
        expect(heading.innerHTML).toEqual("Personal Info")
        const pTagText = screen.getByTestId("ptag")
        expect(pTagText.innerHTML).toEqual("Please provide your name, email address, and phone number.")
    })
})