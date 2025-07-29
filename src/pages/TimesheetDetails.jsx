import { useState } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { AddEntryModal } from "../components/AddTimesheetModal";

const defaultDays = ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"];

// Reusable TaskItem component
const TaskItem = ({ task }) => (
  <div className="flex justify-between items-center border border-gray-200 rounded-md p-3 hover:shadow-sm bg-white">
    <div className="font-medium text-base text-[#111928]">{task.title}</div>
    <div className="flex gap-4 items-center text-sm text-gray-500">
      <div>{task.hours} hrs</div>
      <div className="text-[12px] text-[#1E429F] bg-[#E1EFFE] w-[98px] h-[22px] rounded-md px-2 py-0.5 cursor-pointer">
        {task.project}
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
  </div>
);

// Reusable DaySection component
const DaySection = ({ day, tasks, onAddTaskClick }) => (
  <div className="flex items-baseline">
    <h3 className="w-2/12 font-semibold text-lg text-[#111928]">{day}</h3>
    <div className="w-10/12 rounded-md p-4 space-y-2">
      {tasks.map((task, idx) => (
        <TaskItem key={idx} task={task} />
      ))}
      <button
        onClick={() => onAddTaskClick(day)}
        className="flex w-full items-center justify-center text-sm border border-gray-200 rounded-md p-3 bg-white text-[#1A56DB] hover:shadow-sm hover:bg-[#E1EFFE]"
      >
        <Plus className="w-4 h-4 mr-1" /> Add new task
      </button>
    </div>
  </div>
);

export const TimesheetsDetails = ({ days = defaultDays, initialTasks = {} }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const [tasks, setTasks] = useState(
    days.reduce((acc, day) => {
      acc[day] = initialTasks[day] || [
        { title: "Homepage Development", hours: 4, project: "Project Name" },
        { title: "Homepage Development", hours: 4, project: "Project Name" },
      ];
      return acc;
    }, {})
  );

  const handleAddTask = (day) => {
    setSelectedDay(day);
    setShowModal(true);
  };

  const handleModalAdd = (newTask) => {
    setTasks((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newTask],
    }));
    setShowModal(false);
    setSelectedDay(null);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 space-y-6 mt-4 rounded-[8px] bg-white shadow">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-[24px] text-[#111928]">This week’s timesheet</h2>
            <p className="font-normal text-sm text-[#6B7280] mt-4">21 - 26 January, 2024</p>
          </div>

          <div className="flex flex-col gap-1 relative group">
            <span className="font-medium text-xs text-[#6B7280] text-right">100%</span>
            <div className="md:w-[188px] w-32 h-2 bg-gray-200 rounded-sm overflow-hidden">
              <div className="h-full bg-orange-500 rounded-sm" style={{ width: "50%" }}></div>
            </div>
            <div className="absolute -top-3 right-14 z-10 hidden group-hover:flex px-2 py-1 bg-white text-[#111928] text-sm font-medium rounded shadow-lg">
              20/40 hrs
            </div>
          </div>
        </div>

        {/* Day-wise Sections */}
        {days.map((day) => (
          <DaySection key={day} day={day} tasks={tasks[day]} onAddTaskClick={handleAddTask} />
        ))}
      </div>

      {/* Modal */}
      <AddEntryModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedDay(null);
        }}
        onAdd={handleModalAdd}
      />
    </>
  );
};
