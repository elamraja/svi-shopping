import React from 'react';

export const apiBASE = 'http://127.0.0.1:8000/api/';

export const trancateTitle = title => {
    var length = 25;
    if (title.length > length) {
        title = title.substring(0, length) + '...';
    }
    return title;
};
export const cnCurrency = currency => {
    return (
        '₹' +
        ' ' +
        parseFloat(currency)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    );
};
