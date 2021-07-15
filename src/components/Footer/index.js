import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
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
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    customizeToolbar: {
        minHeight: 10,
        background: '#9e0840'
    }
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <AppBar position="fixed" color="primary" className={`${classes.appBar} footer`}>
                <Toolbar
                    className={classes.customizeToolbar}
                >
                    <footer>
                        <a href="https://github.com/sshahram" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: 16 }}className="icon-1" /></a>
                        <a href="https://www.linkedin.com/in/shirin-shahram" target="_blank" rel="noreferrer"><LinkedInIcon style={{ fontSize: 16 }} className="icon-1 icon-3" /></a>
                    </footer>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
