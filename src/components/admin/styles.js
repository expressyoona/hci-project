const HeaderStyle = {
    root: {
        marginLeft: 320,
        background: '#fff',
        paddingLeft: 0
    },
    collapseButton: {
        cursor: 'pointer',
        marginLeft: 32
    }
}

const SiderStyle = {
    root: {
        position: 'fixed',
        height: '100%'
    },
    siderLogo: {
        display: 'block',
        margin: 'auto'
    },
    lastMenuItem: {
        display: 'flex',
        justifyContent: 'space-around',
        bottom: 0,
        maxHeight: '100%',
        height: 'auto'
    }
}

const AdminStyle = {
    HeaderStyle,
    SiderStyle
}

export default AdminStyle;