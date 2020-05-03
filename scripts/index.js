class App extends React.Component {
  render() {
    return (
      <div>
        <Machine
          s1="🎃"
          s2="🍕"
          s3="☠"
        />
        <Machine
          s1="🎃"
          s2="🍕"
          s3="☠"
        />
        <Machine
          s1="🎃"
          s2="🍕"
          s3="☠"
        />
      </div>
    )
  }
}


const arr = [1, 2, 3, 4, 5]
ReactDOM.render(<App />, document.getElementById('root'));