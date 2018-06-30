let React = require('react')

import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import GrommetSideBar from 'grommet/components/Sidebar'

class Sidebar extends React.Component {
    render() {
        return (
                <GrommetSideBar colorIndex='neutral-1'
                         fixed={true} size='small'>
                    <Box flex='grow'
                         justify='start'>
                        <Menu primary={true}>
                            <Anchor href='#'
                                    className='active'>
                                <i className="fal fa-tachometer sidebar-icon"></i> Dashboard
                            </Anchor>
                            <Anchor href='#'>
                                <i className="fal fa-clipboard-list sidebar-icon"></i> Pets
                            </Anchor>
                            <Anchor href='#'>
                                <i className="fal fa-prescription sidebar-icon"></i> Medications
                            </Anchor>
                            <Anchor href='#'>
                                <i className="fal fa-utensils sidebar-icon"></i> Diets
                            </Anchor>
                            <Anchor href='#'>
                                <i className="fal fa-walking sidebar-icon"></i> Walks
                            </Anchor>
                            <Anchor href='#'>
                                <i className="fal fa-weight sidebar-icon"></i> Weigh-Ins
                            </Anchor>
                        </Menu>
                    </Box>
                </GrommetSideBar>
        );
    }
}

export default Sidebar