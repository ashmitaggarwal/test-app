import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import './oneEvent.css';
import {blue} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    container: {
        width: '320px',
        backgroundColor: 'rgb(31,31,31)',
        color: '#999',
        padding: '2px 10px'
    }
});

export function OneEvent(props) {
    const classes = useStyles();
    const theme = useTheme();

    const {onClose, selectedValue, open} = props;
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        tabs: 0// time: moment().format('LT')
    });
    const handleClose = () => {
        onClose(selectedValue);
    };

    const changeTab = (value) => {
        setState({tabs: value})
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleListItemClick = (value) => {
        onClose(value);
    };
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog onClose={handleClose} fullScreen={fullScreen}
                aria-labelledby="simple-dialog-title" open={open}>

            {props.selectedValue && props.selectedValue !== "" ? <DialogContent className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img className="" src={require("./images/cancel.svg")} onClick={handleClose}/>
                        <img className="pl-6" src={require("./images/edit -top.svg")}/>
                        <img className="pl-6" src={require("./images/delete.svg")}/>
                    </Grid>   <Grid item xs={9}>
                </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6} style={{textAlign: 'left'}}>
                        {props.selectedValue.name}
                        <br/>
                        {props.selectedValue.age} •    {props.selectedValue.phone}
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={5} style={{textAlign: 'right'}} id={"topImg"}>
                        <img src={require("./images/user.svg")}/>
                        <img src={require("./images/payment.svg")}/>
                        <img src={require("./images/task.svg")}/>
                        <img src={require("./images/mail.svg")}/>
                    </Grid>
                </Grid>

                <div
                    className="text-center displayBlock width-full centerDiv">
                    <div className="displayInlineDiv width-full">
                        <div
                            className={state.tabs == 0 ? "padding-10 listTabsActive" : "padding-10 listTabsInActive"}
                            style={{width: 100}} onClick={() => changeTab(0)}
                        >
                            APPOINTMENT
                        </div>
                        <div
                            className={state.tabs == 1 ? "padding-10 listTabsActive" : "padding-10 listTabsInActive"}
                            style={{width: 100}} onClick={() => changeTab(1)}
                        >
                            CONSULTATION
                        </div>
                        <div
                            className={state.tabs == 2 ? "padding-10 listTabsActive" : "padding-10 listTabsInActive"}
                            style={{width: 100}} onClick={() => changeTab(2)}
                        >
                            INVOICE
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                    </div>
                </div>
                {state.tabs == 0 ? <React.Fragment>
                    <Grid container spacing={3}>
                        <Grid item xs={2} className="text-right">
                            <img src={require("./images/edit.svg")}/>
                        </Grid>
                        <Grid item xs={10} style={{textAlign: 'left'}}>
                            <b className="headerText">1. PreOp Consult</b><br/><span className={"capital"}>Linked to 3 appts of Operation</span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={2} className="text-right">
                            <img src={require("./images/doctor.svg")}/>
                        </Grid>
                        <Grid item xs={10} style={{textAlign: 'left'}}>
                            <b className="headerText">Dr Sherry White</b><br/><span className={"capital"}>Consultation • Medicare<br/>Referred by Dr Henry Williams</span>
                        </Grid>
                    </Grid> <Grid container spacing={3}>
                    <Grid item xs={2} className="text-right">
                        <img src={require("./images/location.svg")}/>
                    </Grid>
                    <Grid item xs={10} style={{textAlign: 'left'}}>
                        <b className="headerText">Sydney Clinic • Tulip</b>
                    </Grid>
                </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={2} className="text-right">
                            <img src={require("./images/calender.svg")}/>
                        </Grid>
                        <Grid item xs={10} style={{textAlign: 'left'}}>
                            <b className="headerText">08 Mar • 10:30 AM • 15mins</b>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={2} className="text-right">
                            <img src={require("./images/task.svg")}/>
                        </Grid>
                        <Grid item xs={10} style={{textAlign: 'left'}}>
                            <b className="headerText">A shot of painkiller was given to patient before consultation</b>
                        </Grid>
                    </Grid>
                    <div className="reminder">Reminder sent to patient on 23 Jan 9:13AM on 0412345678 &
                        peter.meyers@gmail.com
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={3} style={{textAlign: 'left'}}>
                            <div className="btn active displayInline"><img src={require("./images/next-date.svg")}/>
                                <div className="text-center centerDiv pl-6">Confirm</div>
                            </div>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'left'}}>
                            <div className="btn displayInline"><img src={require("./images/success.svg")}/>
                                <div className="text-center centerDiv pl-6">Success</div>
                            </div>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'left'}}>
                            <div className="btn displayInline"><img src={require("./images/doctor-btn.svg")}/>
                                <div className="text-center centerDiv pl-6">Send to Doc</div>
                            </div>
                        </Grid>
                    </Grid></React.Fragment> : null}
                {state.tabs != 0 ? <React.Fragment>
                    <Grid container spacing={3}>
                        <p className="text-center centerDiv width-full">No {" " + state.tabs == 1 ? "Consultation" : "Invoice" + " "} Screen
                            Present</p>
                    </Grid></React.Fragment> : null}
            </DialogContent> : null}
        </Dialog>
    );
}

