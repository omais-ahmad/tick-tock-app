export const fetchTimesheets = async () => {
  return [
    { week: 1, date: '1–5 January, 2024', hours: 40, action: 'View' },
    { week: 2, date: '8–12 January, 2024', hours: 40, action: 'View' },
    { week: 3, date: '15–19 January, 2024', hours: 20, action: 'Update' },
    { week: 4, date: '22–28 January, 2024', hours: 40, action: 'View' },
    { week: 5, date: '28 January – 1 February, 2024', hours:'', action: 'Create' }
  ];
};