import React from 'react';

export const apiBASE = 'http://127.0.0.1:8000/api/';
export const mediaURL = 'http://127.0.0.1:8000/uploads/products/';
export const trancateTitle = (title, length) => {
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

export const isValidEmail = email => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    return result;
};
