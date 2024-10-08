import AddHabitForm from "./components/addHabitForm";
import useHabitStore from "./store/store"


function App() {
 const store=useHabitStore()
 console.log(store);
 
  return (
    <div>
      <h1 className="text-3xl text-center py-8 text-blue-500 font-bold underline">
      Habit Tracker
      </h1>
      <AddHabitForm/>
     
    </div>
  )
}

export default App
