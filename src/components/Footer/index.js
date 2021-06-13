import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
    },
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar
                    style={{ background: '#9e0840' }}
                >
                    <footer>
                        <a href="https://github.com/sshahram" target="_blank" rel="noreferrer"><GitHubIcon className="icon-1"/></a>
                        <a href="https://www.linkedin.com/in/shirin-shahram" target="_blank" rel="noreferrer"><LinkedInIcon className="icon-1 icon-3"/></a>
                        <a href="https://www.facebook.com/shirin.shr" target="_blank" rel="noreferrer"><FacebookIcon className="icon-3"/></a>
                    </footer>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}