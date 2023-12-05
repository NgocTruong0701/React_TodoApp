import React, { createContext } from 'react'

const ThemeContext = createContext();

class ThemeProvider extends React.Component {
    state = {
        theme: 'light',
    };

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light',
        }));
    }

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    toggleTheme: this.toggleTheme,
                }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export {ThemeProvider, ThemeContext}