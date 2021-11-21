import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Api, IApi } from './services/apis';
import { Moment } from 'moment';
import { StyledApp } from './styles';
// Components
import { Countdown } from './components/countdown';
import { CountdownInputStart } from './components/countdown-input-start';
import { Header } from './components/header';

const api: IApi = new Api();

interface StateProps {
  theme: any;
  datetime: string;
}

class App extends React.Component {
  state: StateProps = {
    theme: null,
    datetime: new Date().toUTCString()
  }

  async componentDidMount() {
    const datetime = new Date().toUTCString()
    this.setState({ datetime });

    try {
      const themeData = await api.getTheme();

      this.setState({ theme: themeData });
    } catch (error) {
      console.log(error)
    }
  }

  onDatetimeSet = (value: Moment | string) => {
    this.setState({ datetime: value.toString() });
  }

  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;
    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <StyledApp>
            <Header/>
            <CountdownInputStart onChange={this.onDatetimeSet}/>
            <Countdown datetime={this.state.datetime}/>
          </StyledApp>
        </ThemeProvider>
      )
    )
  }
}

export default App;
