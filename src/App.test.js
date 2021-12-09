import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import moment from 'moment';

import App from './App';

describe('Child components', () => {
  beforeEach(() => {

    render(<ThemeProvider theme={{}}><App /></ThemeProvider>);
  });

  test('should render title text in header', async () => {
    const result = await screen.findByText('Koala Web Engineer Coding Challenge');
    expect(result).toBeInTheDocument();
  });

  test('should render lable text for date time picker', async () => {
    const result = await screen.findByText('Select Event Datetime');
    expect(result).toBeInTheDocument();
  });

  test('should render countdown text', async () => {
    const result = await screen.findByText('Event Date is Not Specified');
    expect(result).toBeInTheDocument();
  });
});

describe('Picking date time', () => {
  beforeEach(() => {
    window.localStorage.removeItem('eventDate')
    render(<ThemeProvider theme={{}}><App /></ThemeProvider>);
  });

  test('should display countdown value if date is in future', async () => {
    const datetimeInput = await screen.findByDisplayValue('');
    const tomorrow = moment().add(1, 'days').format('MM/DD/YYYY hh:mm A');
    
    fireEvent.change(datetimeInput, {target: {value: `${tomorrow}`}}); 

    await waitFor(() => {
      const result = screen.getByTestId('countdown-title');

      expect(result).toBeInTheDocument();
      expect(result.textContent.includes('0 days 23 hours')).toBe(true);
    });
  });

  test('should display "Event Reached" if date is in past', async () => {
    const datetimeInput = await screen.findByDisplayValue('');
    const yesterday = moment().add(-1, 'days').format('MM/DD/YYYY hh:mm A');

    fireEvent.change(datetimeInput, {target: {value: `${yesterday}`}}); 

    await waitFor(() => {
      const result = screen.getByTestId('countdown-title');

      expect(result).toBeInTheDocument();
      expect(result.textContent).toEqual('Event Reached');
    });
  });
});