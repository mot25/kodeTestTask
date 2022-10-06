
export const arrayToQuery = (data: Array<number | string>) => {
    let query = '';
    if (data.length > 0) {
        query = `%5B${data.join('%2C')}%5D`;
    }
    return query;
};
export const toQueryString = (data: Object) => {
    const query: Array<string> = [];

    const aData: any = data;

    for (const key in data) {
        if (aData[key] !== undefined) {
            if (Array.isArray(aData[key]) && aData[key].length > 0) {
                query.push(`${key}=${arrayToQuery(aData[key])}`);
            } else if (!Array.isArray(aData[key])) {
                query.push(`${key}=${aData[key]}`);
            }
        }
    }

    return `?${query.join('&')}`;
};
