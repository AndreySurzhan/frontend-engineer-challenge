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
  private intervalId: number = 0;
  state: StateProps = {
    theme: null
  };

  async componentDidMount() {
    try {
      const themeData = await api.getTheme();

      this.setState({ theme: themeData });
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  countdownFromTargetDate = (eventDate?: Moment) => () => {
    const duration: Duration | null = this.getCountdownDuration(eventDate);

    this.setState({ duration });
  }

  onDatetimeSet = (eventDate?: Moment | string) => {
    this.setState({eventDate});

    clearInterval(this.intervalId);

    this.intervalId = setInterval(this.countdownFromTargetDate(moment(eventDate)), 1000);
  }

  getCountdownDuration = (eventDate?: Moment): Duration | null => eventDate ? duration(eventDate.diff(moment.now())) : null;
    
  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;

    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <StyledApp>
            <Header/>
            <CountdownInputStart value={this.state.eventDate} onChange={this.onDatetimeSet}/>
            <Countdown duration={this.state.duration}/>
          </StyledApp>
        </ThemeProvider>
      )
    )
  }
}

export default App;
