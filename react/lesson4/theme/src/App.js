import ThemedButton from "./components/ThemedButton";
import ThemedHeader from "./components/ThemedHeader";

export default function App() {
  return (
    <>
      <div className="title-container">
        <h1>Welcome to ThemeHub</h1>
        <p>
          Please browse our themes and choose the one you like the most.
        </p>
      </div>


      <ThemedHeader title="Light Theme" />
      <p>
        You never go wrong with a classic light theme. It's easy on the eyes and it's the default theme for most applications.
      </p>
      <ThemedButton label="Use Light Theme" onClick={() => console.log("Got light theme")} />
      <ThemedButton label="Read more..." secondary onClick={() => console.log("Read more about light theme")} />



      <ThemedHeader title="Dark Theme" />
      <p>
        Dark theme is a great choice for people who like to work late at night. It's easy on the eyes and it's the default theme for most applications.
      </p>
      <ThemedButton label="Use Dark Theme" onClick={() => console.log("Got dark theme")} />
      <ThemedButton label="Read more..." secondary onClick={() => console.log("Read more about dark theme")} />



      <ThemedHeader title="Cat Theme" />
      <p>
        Do you want to have a cat theme? We have a cat theme for you. This theme is for people who like cats.
      </p>
      <ThemedButton label="Use Cat Theme" onClick={() => console.log("Got cat theme")} />
      <ThemedButton label="Read more..." secondary onClick={() => console.log("Read more about cat theme")} />
    </>
  );
}
