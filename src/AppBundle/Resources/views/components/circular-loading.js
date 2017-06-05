import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '25%'
    }
};

const CircularLoading = () => (
    <MuiThemeProvider>
        <div style={styles.root}>
    <CircularProgress size={80} thickness={5} style={styles.circle} />
        </div>
    </MuiThemeProvider>
);

export default CircularLoading