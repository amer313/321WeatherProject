import { render, screen } from '@testing-library/react';
import Recommendation from './components/Recommendation';

test('renders recommendations for hot weather', () => {
  render(
    <Recommendation
      temperature={35}
      weatherDescription="clear sky"
      humidity={50}
      cloudiness={10}
      visibility={10}
      windSpeed={5}
      location="Fairfax"
    />
  );

  const activity = screen.getByText(/It's a hot evening/i);
  expect(activity).toBeTruthy();
});
