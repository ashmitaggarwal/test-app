import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Navbar from "../Navbar";
import Schedule from "../Schedule";
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: 'rgb(23,23,23)',
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        backgroundColor: 'rgb(23,23,23)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: 'rgb(23,23,23)',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#121212',
        padding: '24px 0',
    },
    midlayer: {
        textAlign: 'center',
        height: '36px',
        opacity: '0.7',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#999999',
        backgroundColor: '#121212'
    },
    image: {
        padding: '5px 1px 5px 10px'
    },
    topFilter: {
        width:'103%',
        // backgroundColor: 'rgba(255, 255, 255, 0.06)',
        marginBottom:'20px',
        marginLeft:'20px',
        marginRight:'20px'
    }
}));

export default function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navbar/>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {/*{['Group', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                    {/*    <ListItem button key={text}>*/}
                    {/*        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
                    {/*        <ListItemText primary={text}/>*/}
                    {/*    </ListItem>*/}
                    {/*))}*/}
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img
                            src={require("./images/dashboard.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img
                            src={require("./images/calender.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img
                            src={require("./images/people.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img src={require("./images/mail.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img
                            src={require("./images/reports.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.image}><img
                            src={require("./images/settings.svg")}/></ListItemIcon>
                        {/*<ListItemText primary={text}/>*/}
                    </ListItem>
                </List>
                {/*<Divider/>*/}
                {/*<List>*/}
                {/*    {['Group', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
                {/*            <ListItemText primary={text}/>*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container spacing={1} className={classes.topFilter+" displayInline width-full"}>
                    <Grid item className="toplayerText br-left blue" xs={1} >
                        <div className=" displayInline"><img src={require("./images/topLayer/add.svg")}/>
                            <div className="text-center centerDiv pl-6 ">New</div>
                        </div>
                    </Grid>
                    <Grid item className="toplayerText" xs={1} >
                        <div className="  displayInline"><img src={require("./images/topLayer/task.svg")}/>
                            <div className="text-center centerDiv pl-6 ">Waitlist</div>
                        </div>
                    </Grid>
                    <Grid item className="toplayerText" xs={1} >
                        <div className="  displayInline"><img src={require("./images/topLayer/filters.svg")}/>
                            <div className="text-center centerDiv pl-6 ">Filter</div>
                        </div>
                    </Grid>
                    <Grid item className="toplayerText" xs={1} >
                        <div className=" displayInline"><img src={require("./images/topLayer/next-date.svg")}/>
                            <div className="text-center centerDiv pl-6 ">Today</div>
                        </div>
                    </Grid>
                    <Grid item className="toplayerText" xs={1} >
                        <div className=" displayInline"><img src={require("./images/topLayer/calender.svg")}/>
                            <div className="text-center centerDiv pl-6 ">08 Mar 2020</div>
                        </div>
                    </Grid> <Grid item xs={4} className="toplayerText" >

                </Grid> <Grid item className="toplayerText" xs={1}>
                    <div className=" displayInline"><img src={require("./images/topLayer/adjust.svg")}/>
                        <div className="text-center centerDiv pl-6 ">List</div>
                    </div>
                </Grid> <Grid item className="toplayerText br-right" xs={1}>
                    <div className=" displayInline"><img src={require("./images/topLayer/settings.svg")}/>
                        <div className="text-center centerDiv pl-6 ">More Options</div>
                    </div>
                </Grid>
                </Grid>
                <Schedule events={props.events}/>
            </main>
        </div>
    );
}
