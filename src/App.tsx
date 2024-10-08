
import AddHabitForm from "./components/AddHabitForm";
import Footer from "./components/Footer";
import HabitList from "./components/HabitList";

import useHabitStore from "./store/store"


function App() {
 const store=useHabitStore()
 console.log(store);
 
  return (
    <div className="p-12">
      <h1 className="text-3xl text-center py-8 text-blue-500 font-bold underline">
      Habit Tracker
      </h1>
      <AddHabitForm />
      <HabitList />
      <Footer/>
     
    </div>
  )
}

export default App
