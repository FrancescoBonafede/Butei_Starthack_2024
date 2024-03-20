function componeString(filter, log = false) {

    let queryString = '';
    if (log) {
        console.log("-----------");
        console.log("filter " + (typeof log == "string" ? log : '') + ": ", filter);
    }
    Object.entries(filter).forEach(([key, value]) => {

        if (value == 'ascend')
            value = 'asc';
        else if (value == 'descend')
            value = 'desc';

        if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length == 0))
            return;

        if (Array.isArray(value)) {
            value.forEach((item) => {
                queryString += `${key}[]=${item}&`;
            });
        } else {
            queryString += `${key}=${value}&`;
        }

    });

    if (queryString.length > 0)
        queryString = queryString.slice(0, -1);
        

    if (log) {
        console.log("queryString", queryString);
        console.log("-----------");
    }
    return queryString
}

export { componeString };
