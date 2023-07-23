import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe ("Form component", () => {
    it("should render Form correctly", () => {
        render(<Form></Form>)
        const form = screen.getByTestId("form")
        expect(form).toBeInTheDocument()
    })
})