import { fireEvent, render, screen, MemoryRouter } from '@testing-library/react';
import Form from '../Form';

describe ("Form component", () => {
    it("should render Form correctly", () => {
        render(<MemoryRouter><Form></Form></MemoryRouter>)
        const form = screen.getByTestId("form")
        expect(form).toBeInTheDocument()
    })
})