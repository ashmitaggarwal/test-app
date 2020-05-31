import React, {useEffect} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WatchLater from '@material-ui/icons/WatchLater';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from "clsx";
import moment from "moment";
import './navbar.css';
import clinics from "../../utils/clinics";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
        // flexGrow: 1,
    },
    select: {
        color: '#fff',
        '&:before': {
            border: '0'
        },
        '&:after': {
            border: '0'
        },
        '::hover': {
            border: '0'
        }
    },
    icon: {
        fill: '#fff',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#094e87',
        // height: '36px',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgb(11,33,52)',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: '4px 6px',
        height: '100%',
        backgroundColor: 'rgb(11,33,52)',
        // position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },


    // title: {
    //     display: 'none',
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'block',
    //     },
    // },
    sectionDesktop: {
        display: 'none',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: '#fff'
    },
    // sectionMobile: {
    //     display: 'flex',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // },
    oval: {
        width: '24px',
        height: '24px',
        fontSize: '12px',
        borderRadius: '20px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#202020'
    },
    tabsSelect: {
        backgroundColor: 'rgb(11,33,52)',
        color:'#999999',
        padding:'0 30px',

    },
    tabsicon: {
        fill: '#999999',
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open] = React.useState(false);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        // setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    useEffect(() => {
        // setInterval(
        //     setState(state => ({...state, time: moment().format('LT')})), 55000)
    });
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const [state, setState] = React.useState({
        clinic: 'SC',
        time: moment().format('LT')
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            > <Toolbar>
                <FormControl className={classes.oval}>{state.clinic}</FormControl>
                <FormControl className={classes.formControl}>

                    <Select
                        native
                        value={state.clinic}
                        onChange={handleChange}
                        className={classes.select}
                        inputProps={{
                            id: "select",
                            name: 'clinic',
                            classes: {
                                root: classes.border,
                                icon: classes.icon,
                            },
                        }}>
                        {clinics.map((item, index) => {
                            return <option value={item.title} key={index} color="inherit">{item.name}</option>
                        })}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Select
                        native
                        value={state.tabs}
                        onChange={handleChange}
                        className={classes.tabsSelect}
                        inputProps={{
                            id: "selecttabs",
                            name: 'tabs',
                            classes: {
                                root: classes.border,
                                icon: classes.tabsicon,
                            },
                        }}
                    >
                        <option>5 tabs active</option>
                        <option>6 tabs active</option>
                    </Select>
                </FormControl>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <AddIcon color={"inherit"}/>
                    </div>
                </div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon color={"inherit"}/>
                    </div>
                </div>
                <div className={classes.grow}/>
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show " color="inherit">
                        {/*    <Badge badgeContent={4} color="secondary">*/}
                        <WatchLater/>
                        {/*    </Badge>*/}
                        {state.time}
                    </IconButton>
                    <IconButton color="inherit">|</IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge color="secondary">
                            <WbSunnyIcon/>
                        </Badge>
                    </IconButton> <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <AssignmentIcon/>
                    </Badge>
                </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>

                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                </div>
            </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}
