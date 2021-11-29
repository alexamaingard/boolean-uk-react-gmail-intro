import './styles/app.css'

import Header from './header.js'
import LeftMenu from './left-menu.js'
import Main from './main.js'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App