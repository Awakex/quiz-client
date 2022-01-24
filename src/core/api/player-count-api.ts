import {Request} from "../request";

export const PlayerCountApi = {
    generateExample: (values) => {
        return Request.post(`player/generate-example`, values);
    },
    checkExample: (values) => {
        return Request.post(`player/check-example`, values);
    },
};
