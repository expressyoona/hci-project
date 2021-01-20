const HeaderStyle = {
    root: {
        marginLeft: 320,
        background: '#fff',
        paddingLeft: 0,
        width: "calc(100% - 320px)",
        height: "82px",
        borderBottom: "1px solid #EFEFEF",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        zIndex: 9
    },
    collapseButton: {
        cursor: 'pointer',
        marginLeft: 32,
    },
    headerIcon: {
        fontSize: 24,
        margin: "0 20px"
    },
    headerRight: {
        position: "absolute",
        right: 25
    }
}

const SiderStyle = {
    root: {
        position: 'fixed',
        height: '100%',
        borderRight: "1px solid #EFEFEF",
        zIndex: 10
    },
    siderLogo: {
        display: "flex",
        height: "82px",
        alignItems: "center",
        borderBottom: "1px solid #EFEFEF"
    },
    siderImgLogo: {
        display: 'block',
        margin: 'auto',
        height: "41px"
    },
    siderIcon: {
        fontSize: "24px",
        marginRight: "25px",
        marginLeft: "10px",
        color: "#1890FF"
    },
    siderItem: {
        display: "flex",
        fontSize: "16px",
        fontWeight: "700",
        color: "#72777A",
        height: "64px",
        alignItems: "center",
        letterSpacing: "0.05em"
        
    },
    lastMenuItem: {
        position: "absolute",
        display: 'flex',
        justifyContent: 'space-around',
        bottom: "20px",
        maxHeight: '100%',
        height: 'auto',
        width: "320px"
    }
}

const AdminStyle = {
    HeaderStyle,
    SiderStyle,
    ContentRoot: {
        width: "calc(100% - 320px)",
        height: "calc(100% - 82px)",
        position: "absolute",
        right: 0,
        bottom: 0
    }
}

export default AdminStyle;