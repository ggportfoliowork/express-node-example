let React = require('react')

import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'

class DashboardView extends React.Component {
    render() {
        return (
            <Section justify='center'
                     align='center'
                     pad='medium'>
                <Columns size='small'
                         masonry={true}
                         maxCount={3}>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 1
                    </Box>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 2
                    </Box>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 3
                    </Box>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 4
                    </Box>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 5
                    </Box>
                    <Box align='center'
                         pad='medium'
                         margin='small'
                         colorIndex='light-2'>
                        Box 6
                    </Box>
                </Columns>

            </Section>
        );
    }
}

export default DashboardView