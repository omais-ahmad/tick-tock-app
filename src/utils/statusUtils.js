export const deriveStatusFromHours = (hours) => {
  if (hours === 40) return 'COMPLETED';
  if (typeof hours === 'number' && hours < 40) return 'INCOMPLETE';
  return 'MISSING';
};

export const getStatusLabel = (status = '') => {
  switch (status.toUpperCase()) {
    case 'COMPLETED':
      return '40 hours added by the user';
    case 'INCOMPLETE':
      return 'Less than 40 hours added by the user';
    case 'MISSING':
      return 'No hours added by the user';
    default:
      return 'Unknown status';
  }
};

export const statusColors = {
  COMPLETED: 'bg-green-100 text-green-800',
  INCOMPLETE: 'bg-yellow-100 text-yellow-800',
  MISSING: 'bg-red-100 text-red-800',
};
