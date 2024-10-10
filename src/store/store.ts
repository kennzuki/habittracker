import { create } from "zustand"
import { devtools, persist } from "zustand/middleware";

export interface Habit{
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState{
    habits: Habit[],
    addHabit: (name: string, frequency: "daily" | "weekly") => void
    removeHabit: (id: string) => void
    
   
}

const useHabitStore = create<HabitState>()(devtools(persist((set)=> {
    return {
        habits: [],
        addHabit: (name, frequency) => set((state)=> {
            return {
                habits: [
                    ...state.habits, {
                        id: Date.now().toString(),
                        name,
                        frequency,
                        completedDates: [],
                        createdAt:new Date().toISOString(),
                    },
                ]
            }
        }),
        removeHabit: (id)=> {
            set((state) => ({
            habits:state.habits.filter((habit)=>habit.id !== id)
        }))
            
        }
    }
}, {
    name:'habits-local'
}
)
)
)


export default useHabitStore