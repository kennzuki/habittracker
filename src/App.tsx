import useHabitStore from "./store/store"

function App() {
 const store=useHabitStore()
 console.log(store);
 
  return (
    <>
      <h1 className="text-3xl text-blue-500 font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
