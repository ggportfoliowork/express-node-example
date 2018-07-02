let React = require('react')

import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import Anchor from 'grommet/components/Anchor'
import Header from 'grommet/components/Header'
import User from 'grommet/components/icons/base/User'

class HeaderScaffold extends React.Component {
    render() {
        let title = 'PawTrackers'
        const menuStyle = {
            zIndex: 99999,
        }
        const firstChild = {
            marginTop: '25px'
        }
        return (
            <Header float={false}
                    fixed={true}
                    size='small'
                    splash={false}>
                <Title>
                    <i className="fal fa-2x fa-paw header-logo"></i> { title }
                </Title>
                <Box flex={true}
                     justify='end'
                     direction='row'
                     responsive={false}>
                    <Search inline={true}
                            fill={true}
                            size='medium'
                            placeHolder='Search'
                            dropAlign={{"right": "right"}} />
                    <Menu icon={<User />}
                          style={menuStyle}
                          size="large"
                          dropAlign={{"right": "right"}}>
                        <Anchor href='#'
                                className='active'>
                            <i className="fal fa-gear sidebar-icon"></i> My Account
                        </Anchor>
                        <Anchor href='#'>
                            <i className="fal fa-power-off"></i> Sign Out
                        </Anchor>
                    </Menu>
                </Box>
            </Header>
        );
    }
}

export default HeaderScaffold