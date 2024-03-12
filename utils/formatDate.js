// imports day js
const dayjs = require('dayjs');

// function to format date
module.exports = {
    formatDate: (date) => {
        if (!(date instanceof Date) || isNaN(date)) {
            return "Invalid date";
        }

        const dateWithoutTime = date.toISOString().replace(/T[\d:]+\.\d+Z/, '');

        return dayjs(dateWithoutTime).format('MMM D, YYYY');
    },
}