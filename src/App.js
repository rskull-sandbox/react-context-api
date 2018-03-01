import React, { createContext } from 'react'

const Context = createContext()
const { Provider, Consumer } = Context

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            increment: () => this.setState({ count: this.state.count + 1 }),
            decrement: () => this.setState({ count: this.state.count - 1 })
          }
        }}
      >
        <Counter />
      </Provider>
    )
  }
}

const Counter = name => (
  <Consumer>
    {({ state, actions }) => (
      <div>
        <span>{state.count}</span>
        <button onClick={actions.increment}>+1</button>
        <button onClick={actions.decrement}>-1</button>
      </div>
    )}
  </Consumer>
)

export default App
