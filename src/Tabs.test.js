import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';

test('renders Donec vitae text', () => {
  render(<Tabs />);
  const onScreenText = screen.getByText(/Donec vitae/i);
  expect(onScreenText).toBeInTheDocument();
});


test('click on Sodales link', () => {
    render(<Tabs />);
    const SndBtnClick = screen.getByTestId('tab1');
    fireEvent.click(SndBtnClick);

    const currentVal = screen.getByText('Donec sodales sagittis');
    expect(currentVal).toBeVisible;

})