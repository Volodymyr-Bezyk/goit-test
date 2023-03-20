import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Box from './Box';
import UsersList from './UsersList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" px={20} py={40}>
        <UsersList />
      </Box>
    </ThemeProvider>
  );
};
