const request = require('request');

async function createUser (action, settings) {
    const body = {
        "access_rols": action.params.access_role,
        "disabled": action.params.disabled,
        "email":action.params.email,
        "handle":action.params.handle,
        "name": action.params.name
    }; 

    const header = {
        "Content-Type": "application/json",
        "DD-API-KEY":settings.API_KEY,
        "DD-APPLICATION-KEY":settings.APP_KEY
    };
    const urlApi = settings.URL + "/api/v1/user"
    const requestOptions = {       
        method: "POST",
        url : urlApi,
        headers : header,
        body: body,
        json: true
    };
    return sendRequest(requestOptions)
}

async function generalRest(action) {
    const requestOptions = {
        method : action.params.method,
        url : action.params.url,
        body : action.params.body,
        headers : action.params.headers,
        json: true
    }
    return sendRequest(requestOptions)
}

async function sendRequest(requestOptions) {
    return new Promise((resolve, reject) => {
        request(requestOptions,function (err, response, body) {
            if (err) {
                return reject (err)
            }
            resolve(response);
        });
    });
}

module.exports = {
    CREATE_USER:createUser,
    REST:generalRest
}
