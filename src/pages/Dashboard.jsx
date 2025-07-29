import { useEffect, useState } from 'react';
import { fetchTimesheets } from '../api/timesheets';
import { StatusBadges } from '../components/StatusBadges';
import { deriveStatusFromHours } from '../utils/statusUtils';
import { AddEntryModal } from "../components/AddTimesheetModal"
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {

  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    fetchTimesheets().then((data) => {
      const withStatus = data.map((entry) => ({
        ...entry,
        status: deriveStatusFromHours(entry.hours),
      }));
      setEntries(withStatus);
    });
  }, []);


  return (
    <>

      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-md shadow" style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
        <h2 className="text-lg font-bold mb-4 font-gray-900">Your Timesheets</h2>

        <table className="w-full table-auto text-sm rounded-lg" style={{ boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A' }}>
          <thead>
            <tr className="text-left border-b border-gray-200 bg-gray-50 ">
              <th className="p-3 w-[100px] ">WEEK #</th>
              <th className="p-3">DATE</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((sheet, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-3 bg-gray-50">{sheet.week}</td>
                <td className="p-3">{sheet.date}</td>
                <td>
                  <StatusBadges status={sheet.status} />
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline" onClick={() => {
                    if (sheet.action === 'Create') {
                      setSelectedEntry(sheet);
                      setShowModal(true);
                    } else if (sheet.action === 'View') {
                      navigate(`/dashboard/details/${sheet.week}`);
                    }
                  }}>{sheet.action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddEntryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        entry={selectedEntry}
        onAdd={(data) => {
          const updated = entries.map((entry) =>
            entry === selectedEntry
              ? {
                ...entry,
                ...data,
                action: 'View',
                status: deriveStatusFromHours(data.hours),
              }
              : entry
          );
          setEntries(updated);
          setShowModal(false);
        }}
      />
    </>
  );
};


