import * as React from 'react';
import Typography from './modules/components/Typography';

import style from './modules/styles/styles';
import withRoot from './modules/styles/withRoot';


function Home() {
    const css = style();
    return (
        <>
            <Typography variant="h1" sx={{textAlign: 'center'}}>
                Hello World
            </Typography>
        </>
    );
}

export default withRoot(Home);