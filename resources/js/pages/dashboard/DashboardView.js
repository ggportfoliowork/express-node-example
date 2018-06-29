let React = require('react')

import Box from 'grommet/components/Box'
import Split from 'grommet/components/Split'
import '../../../../node_modules/grommet-css'
import Heading from 'grommet/components/Heading'

class DashboardView extends React.Component {
    render() {
        return (
            <Split>
                <Box colorIndex='neutral-1'
                     justify='center'
                     align='center'
                     pad='medium'>
                    Left Side
                </Box>
                <Box colorIndex='neutral-2'
                     justify='center'
                     align='center'
                     pad='medium'>
                    { moment(Date.now()).format('MM/DD/YY hh:mm') }
                </Box>
            </Split>
        );
    }
}

export default DashboardView