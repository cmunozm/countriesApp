import Pagination from './Pagination';
import { render, screen, fireEvent, act } from '@testing-library/react';

describe('Pagination', () => {
  beforeEach(() => {
    render(<Pagination totalPages={5} onChangePage={() => {}} />);
  });

  test('Should render pagination component', () => {
    const list = screen.getByRole('list');
    expect(list.getElementsByClassName('pagination')).toBeDefined();

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(5);
  });

  test('Shuold add active class when button is clicked', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(5);

    act(() => {
      fireEvent.click(buttons[0]);
    });

    const clickedButton = screen.getAllByRole('button')[0];
    expect(clickedButton.classList).toContain('pagination__item--active');
  });
});
