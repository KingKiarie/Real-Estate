import NavBar from "./components/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles.image}>
          <h2>Live Lively in Evergreen Homes</h2>
          <input
            className={styles.input}
            type="text"
            placeholder="&nbsp;Enter an address,neighbourhood,city or zipcode"
          />
          &#128269;
        </div>
        <section>
          <div className={styles.intro}>
            <div>
              <h3>Get home recomendations</h3>
              <p>Sign in for a more personalized experience</p>
              <button>Sign in</button>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
