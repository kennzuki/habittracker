import { FaRegTrashAlt } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import useHabitStore from '../store/store';

const HabitList = () => {
  const { habits,removeHabit } = useHabitStore();
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className=''>
      {habits.map((habit) => (
        <div key={habit.id} className='p-12 mt-8 border rounded-xl shadow-xl flex gap-4 justify-between place-items-center uppercase font-bold'>
          <h2 className='flex flex-col gap-4 place-items-center text-xl'>
            {habit.name} <span className='text-sm'>{habit.frequency}</span>
          </h2>
          <section className='flex gap-4 place-items-center font-bold text-2xl [&_button]:py-2 [&_button]:px-4 [&_button]:border [&_button]:rounded-xl [&_button]:flex [&_button]:gap-3 [&_button]:place-items-center '>
            <button className='text-blue-500'>
              <CiCircleCheck />  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
            </button>
            <button onClick={()=>removeHabit(habit.id)} className='text-red-500'>
              <FaRegTrashAlt /> Delete
            </button>
          </section>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
