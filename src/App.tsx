import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Api, IApi } from './services/apis';
// Components
import { Countdown } from './components/countdown';

const api: IApi = new Api();

interface StateProps {
  theme: any;
}

class App extends React.Component {
  state: StateProps = {
    theme: null,
  }

  async componentDidMount() {
    try {
      const themeData = await api.getTheme();
      
      this.setState({ theme: themeData });
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;
    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <Countdown />
        </ThemeProvider>
      )
    )
  }
}

export default App;
