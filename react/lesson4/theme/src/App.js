import ThemedButton from "./components/ThemedButton";
import ThemedHeader from "./components/ThemedHeader";
import ThemedText from "./components/ThemedText";

export default function App() {
  return (
    <>
      <div className="title-container">
        <h1>Welcome to React Masters</h1>
        <p>
          We are bringing you all the themes you need for your applications.
        </p>
      </div>

      <div class="themes-section">
          <div className="theme-container" style={{ backgroundColor: "white" }}>
              <ThemedHeader title="Light Theme" theme="light" />
              <ThemedText text="You never go wrong with a classic light theme. It's easy on the eyes and it's the default theme for most applications." theme="light" />
              <ThemedButton label="Use Light Theme" theme="light" onClick={() => console.log("Got light theme")} />
          </div>

          <div className="theme-container" style={{ backgroundColor: "#222" }}>
              <ThemedHeader title="Dark Theme" theme="dark" />
              <ThemedText text="Dark theme is a great choice for people who like to work late at night. It's easy on the eyes and it's the default theme for most applications." theme="dark" />
              <ThemedButton label="Use Dark Theme" theme="dark" onClick={() => console.log("Got dark theme")} />
          </div>


          <div className="theme-container" style={{ backgroundColor: "#051505" }}>
              <ThemedHeader title="Hacker Theme" theme="hacker" />
              <ThemedText text="Do you want to have a hacker theme? We have a cat theme for you. This theme is for people who like hacking." theme="hacker" />
              <ThemedButton theme="hacker" label="Use Hacker Theme" onClick={() => console.log("Got cat theme")} />
          </div>
      </div>
      
      <div className="statement">
        These are just a few of the themes we have. We have many more themes for you to choose from.
      </div>
       
       <div className="signup-container">
        <label for="email">Get started now</label>
        <input type="text" id="email" placeholder="Enter your email"></input>
        <ThemedButton theme="light" label="Sign Up" />
       </div>
    </>
  );
}
