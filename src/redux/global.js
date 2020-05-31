export const SHOW_SERVER_ERROR = 'global/SHOW_SERVER_ERROR';
export const HIDE_SERVER_ERROR = 'global/HIDE_SERVER_ERROR';

const initialState = {
    events: [
        {
            id: 0,
            title: 'Cardiac surgery',
            name: 'Ashley Simons',
            color: "orange", age: "32Yrs", phone: "0412345678",
            image: "card.svg",
            start: new Date(2020, 4, 31, 9, 0, 0),
            end: new Date(2020, 4, 31, 9, 15, 0),
            resourceId: 1,
        },
        {
            id: 1,
            title: 'Cardiac surgery',
            name: 'Andrew Peters Veelo',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "doctor.svg",
            start: new Date(2020, 4, 31, 9, 30, 0),
            end: new Date(2020, 4, 31, 9, 45, 0),
            resourceId: 3,
        },
        {
            id: 2,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 4, 31, 10, 15, 0),
            end: new Date(2020, 4, 31, 10, 30, 0),
            resourceId: 4,
        }, {
            id: 3,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 4, 31, 11, 15, 0),
            end: new Date(2020, 4, 31, 11, 30, 0),
            resourceId: 4,
        },
        {
            id: 4,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 4, 31, 14, 15, 0),
            end: new Date(2020, 4, 31, 14, 30, 0),
            resourceId: 4,
        }, {
            id: 5,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 4, 31, 17, 15, 0),
            end: new Date(2020, 4, 31, 17, 30, 0),
            resourceId: 4,
        },
        {
            id: 0,
            title: 'Cardiac surgery',
            name: 'Ashley Simons',
            color: "orange", age: "32Yrs", phone: "0412345678",
            image: "card.svg",
            start: new Date(2020, 5, 1, 9, 0, 0),
            end: new Date(2020, 5, 1, 9, 15, 0),
            resourceId: 1,
        },
        {
            id: 1,
            title: 'Cardiac surgery',
            name: 'Andrew Peters Veelo',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "doctor.svg",
            start: new Date(2020, 5, 1, 9, 30, 0),
            end: new Date(2020, 5, 1, 9, 45, 0),
            resourceId: 3,
        },
        {
            id: 2,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 5, 1, 10, 15, 0),
            end: new Date(2020, 5, 1, 10, 30, 0),
            resourceId: 4,
        }, {
            id: 3,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 5, 1, 11, 15, 0),
            end: new Date(2020, 5, 1, 11, 30, 0),
            resourceId: 4,
        },
        {
            id: 4,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 5, 1, 14, 15, 0),
            end: new Date(2020, 5, 1, 14, 30, 0),
            resourceId: 4,
        }, {
            id: 5,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 5, 1, 17, 15, 0),
            end: new Date(2020, 5, 1, 17, 30, 0),
            resourceId: 4,
        }, {
            id: 0,
            title: 'Cardiac surgery',
            name: 'Ashley Simons',
            color: "orange", age: "32Yrs", phone: "0412345678",
            image: "card.svg",
            start: new Date(2020, 5, 2, 9, 0, 0),
            end: new Date(2020, 5, 2, 9, 15, 0),
            resourceId: 1,
        },
        {
            id: 1,
            title: 'Cardiac surgery',
            name: 'Andrew Peters Veelo',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "doctor.svg",
            start: new Date(2020, 5, 2, 9, 30, 0),
            end: new Date(2020, 5, 2, 9, 45, 0),
            resourceId: 3,
        },
        {
            id: 2,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 5, 2, 10, 15, 0),
            end: new Date(2020, 5, 2, 10, 30, 0),
            resourceId: 4,
        }, {
            id: 3,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 5, 2, 11, 15, 0),
            end: new Date(2020, 5, 2, 11, 30, 0),
            resourceId: 4,
        },
        {
            id: 4,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 5, 2, 14, 15, 0),
            end: new Date(2020, 5, 2, 14, 30, 0),
            resourceId: 4,
        }, {
            id: 5,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 5, 2, 17, 15, 0),
            end: new Date(2020, 5, 2, 17, 30, 0),
            resourceId: 4,
        },

        {
            id: 2,
            title: 'Cardiac surgery',
            name: 'Ashley Booravoola',
            color: "green", age: "31Yrs", phone: "0427342648",
            image: "success.svg",
            start: new Date(2020, 5, 3, 9, 15, 0),
            end: new Date(2020, 5, 3, 9, 30, 0),
            resourceId: 4,
        }, {
            id: 3,
            title: 'Cardiac surgery',
            name: 'Peter Meyers',
            color: "red", age: "58Yrs", phone: "035353244",
            image: "calender.svg",
            start: new Date(2020, 5, 3, 10, 15, 0),
            end: new Date(2020, 5, 3, 10, 30, 0),
            resourceId: 4,
        }
    ],
    serverError: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case HIDE_SERVER_ERROR:
            return {
                ...state,
                serverError: false
            };
        case SHOW_SERVER_ERROR:
            return {
                ...state,
                serverError: action.payload
            };
        default:
            return state
    }
}


export const refreshServerError = () => {
    return dispatch => {
        dispatch({
            type: HIDE_SERVER_ERROR
        });
    }
};

export const serverError = (payload) => {
    refreshServerError();
    return dispatch => {
        dispatch({
            type: SHOW_SERVER_ERROR,
            payload
        });
    }
};

