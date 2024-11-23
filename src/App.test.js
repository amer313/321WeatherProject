import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensures matchers like toBeInTheDocument work
import App from './App';
import Header from './components/Header';
import Recommendation from './components/Recommendation';

// Mock `navigator.geolocation`
const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation((success) =>
    success({
      coords: {
        latitude: 38.8462,
        longitude: -77.3064,
      },
    })
  ),
};
global.navigator.geolocation = mockGeolocation;

describe('App Component Tests', () => {
  test('renders App component without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(
      <Header
        toggleDarkMode={() => {}}
        darkMode={false}
        toggleUnits={() => {}}
        units="imperial"
        location=""
        setLocation={() => {}}
        searchLocation={() => {}}
      />
    );
    expect(screen.getByPlaceholderText(/Enter Location/i)).toBeInTheDocument();
    expect(screen.getByText(/🌙 Dark Mode/i)).toBeInTheDocument();
  });

  
});
