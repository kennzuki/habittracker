
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";


const HabitList = () => {
  return (
    <div className='p-12 mt-8 border rounded-xl shadow-xl flex gap-4 justify-between place-items-center uppercase font-bold'>
      <h2 className="flex flex-col gap-4 place-items-center text-xl">habit <span className="text-sm">daily</span></h2>
      <section className="flex gap-4 place-items-center font-bold text-2xl [&_button]:py-2 [&_button]:px-4 [&_button]:border [&_button]:rounded-xl [&_button]:flex [&_button]:gap-3 [&_button]:place-items-center ">
        <button className="text-blue-500"><CiCircleCheck /> Mark completed</button>
        <button className="text-red-500"><FaRegTrashAlt /> Delete</button>
      </section>
    </div>
  )
}

export default HabitList