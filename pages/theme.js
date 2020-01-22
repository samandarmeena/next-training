import { useContext } from 'react';
import MyLayout from '../components/MyLayout';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};
const ThemeContext = React.createContext(themes.light);
const theme = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};
const Toolbar = props => {
  return (
    <>
      <ThemedButton />
    </>
  );
};
const ThemedButton = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <MyLayout>
      <button
        style={{
          background: themeContext.background,
          color: themeContext.foreground
        }}
      >
        Demo
      </button>
    </MyLayout>
  );
};
export default theme;
