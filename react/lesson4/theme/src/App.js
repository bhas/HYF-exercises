import ThemedButton from "./components/ThemedButton";
import ThemedHeader from "./components/ThemedHeader";
import ThemedText from "./components/ThemedText";

export default function App() {
  return (
    <>
      <div className="title-container">
        <h1>Welcome to ThemeHub</h1>
        <p>
          Please browse our themes and choose the one you like the most.
        </p>
      </div>


      <ThemedHeader title="Light Theme" theme="light"/>
      <ThemedText text="You never go wrong with a classic light theme. It's easy on the eyes and it's the default theme for most applications." theme="light" />
      <ThemedButton label="Use Light Theme" theme="light" onClick={() => console.log("Got light theme")} />
      <ThemedButton label="Read more..." theme="light" secondary onClick={() => console.log("Read more about light theme")} />


      <div style={{backgroundColor: "#222"}}>
      <ThemedHeader title="Dark Theme" theme="dark" />
      <ThemedText text="Dark theme is a great choice for people who like to work late at night. It's easy on the eyes and it's the default theme for most applications." theme="dark" />
      <ThemedButton label="Use Dark Theme" theme="dark" onClick={() => console.log("Got dark theme")} />
      <ThemedButton label="Read more..." theme="dark" secondary onClick={() => console.log("Read more about dark theme")} />
      </div>
      

      <div style={{backgroundColor: "#051505"}}>
        <ThemedHeader title="Hacker Theme" theme="hacker" />
        <ThemedText text="Do you want to have a cat theme? We have a cat theme for you. This theme is for people who like cats." theme="hacker" />
        <ThemedButton theme="hacker" label="Use Cat Theme" onClick={() => console.log("Got cat theme")} />
        <ThemedButton theme="hacker" label="Read more..." secondary onClick={() => console.log("Read more about cat theme")} />
      </div>
    </>
  );
}
