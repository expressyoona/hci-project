const LoginFormStyle = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: '#EBEBEB',
        //height: '592px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 40px',
    },
    title: {
        fontSize: 18,
        letterSpacing: '0.145em',
        fontWeight: 'bold',
        marginBottom: '30px'
    },
    quickLoginBtn: {
        //display: 'flex',
        width: '540px',
        height: '35px',
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
        lineHeight: '22px',
        border: '3px'
    },
    phoneLoginBtn: {
        background: '#7FAD39'
    },
    facebookLoginBtn: {
        background: '#4267B2'
    },
    googleLoginBtn: {
        background: '#DB4437'
    },
    loginBtn: {
        background: '#7FAD39',
        width: '540px',
        height: '35px',
        color: 'white',
        fontSize: 14
    },
    forget: {
        float: 'right'
    },
    policy: {
        textAlign: 'center'
    }
    
}

export default LoginFormStyle;