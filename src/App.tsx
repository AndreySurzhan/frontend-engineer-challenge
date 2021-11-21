import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Api, IApi } from './services/apis';
import moment, { Moment, duration, isMoment, Duration } from 'moment';
import { StyledApp } from './styles';
// Components
import { Countdown } from './components/countdown';
import { CountdownInputStart } from './components/countdown-input-start';
import { Header } from './components/header';

const api: IApi = new Api();

interface StateProps {
  theme: any;
  targetDatetime: Moment;
  datetimeDurationFromTargetDate: Duration;
}

class App extends React.Component {
  private intervalId: number = 0;
  state: StateProps = {
    theme: null,
    targetDatetime: moment(),
    datetimeDurationFromTargetDate: {} as Duration
  };

  async componentDidMount() {
    try {
      const themeData = await api.getTheme();

      this.setState({ theme: themeData });
    } catch (error) {
      console.log(error)
    }

    const targetDatetime = moment(); //get date from localStorage

    this.setState({ targetDatetime });

    this.intervalId = setInterval(this.countdownfromTargetDate(targetDatetime), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  countdownfromTargetDate = (targetDatetime: Moment) => () => {
    const duration: Duration = this.getCountdownDuration(targetDatetime);

    this.setState({ datetimeDurationFromTargetDate: duration.months() });
  }

  onDatetimeSet = (value: Moment | string) => {
    if(!isMoment(value)) throw new Error('Input Date is invalid');

    const targetDatetime: number = this.getCountdownDuration(value).days();

    this.setState({ targetDatetime });
  }

  getCountdownDuration = (value: Moment): Duration => 
    duration(Math.max(value.valueOf() - (Math.floor(Date.now() / 1000)), 0), 'seconds');

  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;

    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <StyledApp>
            <Header/>
            <CountdownInputStart onChange={this.onDatetimeSet}/>
            <Countdown datetime={this.state.datetimeDurationFromTargetDate}/>
          </StyledApp>
        </ThemeProvider>
      )
    )
  }
}

export default App;
