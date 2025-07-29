import { getStatusLabel, statusColors } from '../utils/statusUtils';

export const StatusBadges = ({ status }) => {
    const label = getStatusLabel(status);
    const classes = statusColors[status] || 'bg-gray-100 text-gray-800';
    const displayStatus = status?.toUpperCase() || 'UNKNOWN';
    return (
        <span className={`px-3 py-1 rounded text-xs font-semibold ${classes}`} title={label}>
             {displayStatus}
        </span>
    );
};
