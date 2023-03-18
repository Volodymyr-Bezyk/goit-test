import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import TweetCard from './TweetCard';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TweetCard />
    </ThemeProvider>
  );
};
