import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import './app.css'

const App = () => (
  <div>
    <header>
      <Link class="link" to="/">
        Home
      </Link>
      <Link class="link" to="/about-us">
        About
      </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
