import { useState } from 'react'

// Component names should be PascalCase
const AddHabitForm = () => {
    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily")

    const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFrequency(e.target.value as "daily" | "weekly")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add form submission logic here
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    className="p-2 w-full border rounded-md" 
                    placeholder='Habit'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select 
                    className="p-2 w-full border rounded-md"
                    value={frequency}
                    onChange={handleFrequencyChange}
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Add Habit
                </button>
            </form>
        </div>
    )
}

export default AddHabitForm