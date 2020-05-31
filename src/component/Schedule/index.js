import React from 'react';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import {OneEvent} from "../OneEvent";

const localizer = momentLocalizer(moment);
function Schedule(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const Event = ({event}) =>
        <div style={{display: 'inline-flex'}} onClick={() => handleClickOpen()}>
            <img src={require("./images/"+event.image)}/>
            <div><strong>{event.name}</strong><br/>
                <span>{event.title.toUpperCase()}</span></div>
        </div>

    const handleClose = (value) => {
        setOpen(false);
    };
    const [state, setState] = React.useState({
        view: 'week',
        selectedValue: ''
    });
    const CustomToolbar = (toolbar) => {
        const goToWeek = () => {
            setState({view: 'week'})
            toolbar.onView('week');
        };


        const goToMonth = () => {
            setState({view: 'month'})
            toolbar.onView('month');
        };


        return (
            <div className={['toolbar-container']}>
                <label className={['rbc-toolbar-label']}>Dr Sherry White</label>

                <div className={['rbc-btn-group']}>
                    <button
                        className={state.view === "week" ? "active" : ""}
                        onClick={goToWeek}>Week
                    </button>
                    <button
                        className={state.view === "month" ? "active" : ""}
                        onClick={goToMonth}>Month
                    </button>
                </div>
            </div>
        );
    };
    let eventColors = (event, start, end, isSelected) => {
        var backgroundColor = "event-";
        event.color
            ? (backgroundColor = backgroundColor + event.color)
            : (backgroundColor = backgroundColor + "default");
        return {
            className: backgroundColor
        };
    };

    let addNewEventAlert = (slotInfo) => {
        alert(slotInfo)
    };

    let selectedEvent = (event) => {
        // alert(event.title);
        setState({selectedValue: event, view: 'week'});
    };
    return <React.Fragment>
        <div className={['layout']}>
            <Calendar
                popup
                localizer={localizer}
                events={props.events}

                startAccessor="start"
                endAccessor="end"
                scrollToTime={new Date(2016, 1, 1, 10)}
                min={new Date(2016, 10, 0, 6, 0, 0)}
                defaultDate={new Date()}

                onSelectEvent={event => selectedEvent(event)}
                onSelectSlot={slotInfo => addNewEventAlert(slotInfo)}
                eventPropGetter={eventColors}
                components={{
                    toolbar: CustomToolbar,
                    event: Event
                }}
                views={['week', 'month']}
                defaultView={Views.WEEK}
                style={{height: '100vh'}}
            />
        </div>
        <OneEvent
            selectedValue={state.selectedValue}
            open={open} onClose={handleClose}/>
    </React.Fragment>
}

export default Schedule;
