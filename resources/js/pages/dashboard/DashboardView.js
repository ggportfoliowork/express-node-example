let React = require('react')

import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'

class DashboardView extends React.Component {
    render() {
        return (
            <Section justify='center'
                     align='center'
                     pad='large'>
                <Columns size='large'>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 1
                    </Box>
                </Columns>
            </Section>
        );
    }
}

export default DashboardView