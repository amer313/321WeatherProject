import { render, screen, fireEvent } from '@testing-library/react';
import Header from './components/Header';

test('renders header and toggles dark mode', () => {
  const mockToggleDarkMode = jest.fn();

  render(
    <Header
      toggleDarkMode={mockToggleDarkMode}
      darkMode={false}
      toggleUnits={jest.fn()}
      units="imperial"
      location=""
      setLocation={jest.fn()}
      searchLocation={jest.fn()}
    />
  );

  const toggleButton = screen.getByText(/🌙 Dark Mode/i);
  fireEvent.click(toggleButton);
  expect(mockToggleDarkMode).toHaveBeenCalled();
});
