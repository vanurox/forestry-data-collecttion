import BaseUrl from './BaseUrl';
const Helper = ( method, body) => {
    if (body !== undefined) {
        return (
            fetch(BaseUrl, {
                method: method,
                body: body
            })
                .then((response) => {
                    return response.json();
                })
                .catch((err) => {
                    return err;
                })
        );
    }
    else {
        return (
            fetch(BaseUrl, {
                method: method,
            })
                .then((response) => {
                    return response.json();
                })
                .catch((err) => {
                    return err;
                })
        );
    }
}

export default Helper;