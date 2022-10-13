
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

export const comapreMonth = (date: string) => {
    const returnDate = date.split('-')
    const returnDate2 = returnDate[0] = new Date().getFullYear().toString()
    return `${returnDate2}-${returnDate[1]}-${returnDate[2]}`;
}


export const getCurrentDay = () => {
    const year = new Date().getFullYear().toString()
    const mont = (new Date().getMonth() + 1).toString()
    const day = new Date().getDate().toString()
    return `${year.length < 2 ? '0' + year : year}-${mont.length < 2 ? '0' + mont : mont}-${day.length < 2 ? '0' + day : day}`
}


export const getNameRusMonth = (date: string) => {
    const getDate = new Date(date).getDate()
    switch (new Date(date).getMonth()) {
        case 0:
            return `${getDate} янв`
        case 1:
            return `${getDate} фев`
        case 2:
            return `${getDate} мар`
        case 3:
            return `${getDate} апр`
        case 4:
            return `${getDate} май`
        case 5:
            return `${getDate} июн`
        case 6:
            return `${getDate} июл`
        case 7:
            return `${getDate} авг`
        case 8:
            return `${getDate} сен`
        case 9:
            return `${getDate} окт`
        case 10:
            return `${getDate} ноя`
        case 11:
            return `${getDate} дек`
        default:
            return `${getDate} янв`
    }
}