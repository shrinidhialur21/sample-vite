import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    // JS runtime error
    console.error("Error: Failed to fetch user profile");

    // Simulated unhandled promise rejection
    Promise.reject(new Error("UnhandledPromiseRejection: API timeout"));

    // Simulated generic failure log
    console.log("Process failed due to invalid configuration");

    // Simulated stack trace
    try {
      throw new TypeError("TypeError: Cannot read properties of undefined");
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <p>Edit <code>src/App.jsx</code></p>
      </div>

      <p className="read-the-docs">
        Check logs for simulated errors
      </p>
    </>
  )
}

export default App