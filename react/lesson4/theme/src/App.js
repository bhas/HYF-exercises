import { useState } from "react";
import ThemedButton from "./components/ThemedButton";
import ThemedHeader from "./components/ThemedHeader";
import ThemedText from "./components/ThemedText";
import { ThemeContext } from "./contexts/ThemeContext";
import "./themes/lightTheme.css";
import "./themes/darkTheme.css";
import "./themes/hackerTheme.css";


export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className={"page-container " + theme}>

          <div className="title-container">
            <h1 className={"title " + theme}>Welcome to React Masters</h1>
            <p className={"subtitle " + theme}>
              We are bringing you all the themes you need for your applications.
            </p>
          </div>

          <div class="themes-section">
            <ThemeContext.Provider value={'light'}>
              <div className={"theme-container light"}>
                <ThemedHeader title="Light Theme" theme="light" />
                <ThemedText text="You never go wrong with a classic light theme. It's easy on the eyes and it's the default theme for most applications." theme="light" />
                <ThemedButton label="Use Light Theme" theme="light" onClick={() => setTheme("light")} />
              </div>
            </ThemeContext.Provider>

            <ThemeContext.Provider value={'dark'}>
              <div className={"theme-container dark"}>
                <ThemedHeader title="Dark Theme" theme="dark" />
                <ThemedText text="Dark theme is a great choice for people who like to work late at night. It's easy on the eyes and it's the default theme for most applications." theme="dark" />
                <ThemedButton label="Use Dark Theme" theme="dark" onClick={() => setTheme("dark")} />
              </div>
            </ThemeContext.Provider>


            <ThemeContext.Provider value={'hacker'}>
              <div className={"theme-container hacker"}>
                <ThemedHeader title="Hacker Theme" theme="hacker" />
                <ThemedText text="Do you want to have a hacker theme? We have a cat theme for you. This theme is for people who like hacking." theme="hacker" />
                <ThemedButton theme="hacker" label="Use Hacker Theme" onClick={() => setTheme("hacker")} />
              </div>
            </ThemeContext.Provider>
          </div>

          <div className={"statement-container " + theme}>
            These are just a few of the themes we have. We have many more themes for you to choose from.
            <h3>Get started now</h3>
            <ThemedButton theme="light" label="Sign Up" />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
