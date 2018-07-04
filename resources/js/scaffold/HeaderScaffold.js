let React = require('react')

import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Header from 'grommet/components/Header'
import User from 'grommet/components/icons/base/User'
import Home from 'grommet/components/icons/base/Home'
import FingerPrint from 'grommet/components/icons/base/FingerPrint'


/**
 * Header Scaffold
 */
class HeaderScaffold extends React.Component {
    render() {
        let title = ''
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
                    <i className="fal fa-2x fa-box header-logo"></i> { title }
                </Title>
                <Box flex={true}
                     justify='end'
                     direction='row'
                     responsive={false}>
                    <Menu responsive={true}
                          inline={true}
                          fill={true}
                          justify='start'
                          size='large'
                          direction='row'
                          primary={false}>
                        <Anchor href='#' icon={<Home />}>
                            Home
                        </Anchor>
                        <Anchor href='#' icon={<FingerPrint />}>
                            Schedule
                        </Anchor>
                        <Anchor href='#' icon={<User />} align='end'>
                            Account
                        </Anchor>
                    </Menu>
                </Box>
            </Header>
        );
    }
}

export default HeaderScaffold