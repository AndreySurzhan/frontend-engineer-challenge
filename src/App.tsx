import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Api, IApi } from './services/apis';
import moment, { Moment, duration, Duration } from 'moment';
import { StyledApp } from './styles';
// Components
import { Countdown } from './components/countdown';
import { CountdownInputStart } from './components/countdown-input-start';
import { Header } from './components/header';

const api: IApi = new Api();

interface StateProps {
  theme: any;
  duration?: Duration;
  eventDate?: Moment;
}

class App extends React.Component {
  private countdownIntervalId: number = 0;
  state: StateProps = {
    theme: null
  };

  /**
   * React Hook. 
   * Fetches theme config data before component is mounted.
   * @returns {void}
 */
  async componentDidMount() {
    try {
      const themeData = await api.getTheme();

      this.setState({ theme: themeData });
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * React Hook. 
   * Clears countdown interval when component is being removed from DOM.
   * @returns {void}
 */
  componentWillUnmount(){
    clearInterval(this.countdownIntervalId);
  }

  /**
   * Callback function to pass to CountdownInputStart component.
   * This function is supposed to be called with current context when user selects data/time in datetime picker input.
   * Function sets eventDate, clears countdown existing interval and sets new interval with new passed date
   * @param {Moment | null} eventDate - Date in Moment format that represents when Future event is supposed to start.
   * @returns {void}
 */
   handleEventDateSet = (eventDate?: Moment | string): void => {
    this.setState({eventDate});

    clearInterval(this.countdownIntervalId);

    this.countdownIntervalId = setInterval(this.countdownFromEventtDate(moment(eventDate)), 1000);
  }

  /**
   * Function that returns a callback function that is used as callback for setInterval function. 
   * Calback function gets duration and sets it to state.
   * @param {Moment | null} eventDate - Date in Moment format that represents when Future event is supposed to start.
   * @returns {Function}
 */
  countdownFromEventtDate = (eventDate?: Moment): Function => () => {
    const duration: Duration | null = this.getCountdownDuration(eventDate);

    this.setState({ duration });
  }

  /**
   * Function that returns calculated duration between Event Date and Now date
   * @param {Moment | null} eventDate - Date in Moment format that represents when Future event is supposed to start.
   * @returns {Duration | null}
 */
  getCountdownDuration = (eventDate?: Moment): Duration | null => eventDate ? duration(eventDate.diff(moment.now())) : null;
    
  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;

    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <StyledApp>
            <Header/>
            <CountdownInputStart value={this.state.eventDate} onChange={this.handleEventDateSet}/>
            <Countdown duration={this.state.duration}/>
          </StyledApp>
        </ThemeProvider>
      )
    )
  }
}

export default App;
