import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
    it('renders button correctly', () => {
        render(<Button></Button>)
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument()
    })
    it('renders button contetn correctly', () => {
        render(<Button>Test button</Button>)
        const button = screen.getByTestId('button');
        expect(button).toHaveTextContent('Test button');
    })
})