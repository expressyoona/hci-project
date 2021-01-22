const RestaurantItemStyle = {    
    item: {
        display: "inline-flex",
        width: "100%"
    },
    itemImage: {
        position: "relative",
        marginRight: 20
    },
    itemImg: {
        width: 100,
        height: 100,
    },
    itemStatus: {
        position: "absolute",
        bottom: 0,
        color: "#FFFFFF",
        fontSize: 12,
        margin: 0,
        padding: "3px 0",
        background: "rgba(0, 0, 0, 0.49)",
        width: 100,
        textAlign: "center"
    },
    itemInfo: {
        width: "100%"
    },
    itemName: {
        fontSize: 18,
        fontWeight: 700
    },
    itemAddress: {
        fontSize: 16,
        fontWeight: 400,
    },
    itemPhoneNumber: {
        marginRight: 20
    },
    itemTime: {
        fontStyle: "italic",
        color: "#7A7A7A",
        float: "right"
    }
}

const RestaurantInfoStyle = {
    root: {
        padding: "20px 50px 20px 40px"
    },
    breadcrumb: {
        fontWeight: "bold"
    },
    infomation: {
        marginTop: 20
    },
    info: {
        display: "inline-flex",
        position: "relative",
        width: "100%"
    },
    infoImg: {
        width: 300,
        height: 300
    },
    table: {
        margin: 0,
        width: "100%",
    },
    tr: {
        border: "none"
    },
    td: {
        padding: 5,
        fontSize: 20,
        color: "#000000"
    },
    infoTitle: {
        fontSize: 28,
        marginBottom: 0
    },
    time: {
        position: "absolute",
        right: 0,
        top: 0,
        color: "#979797",
        fontStyle: "italic"
    },
    map: {
        border: "1px solid #000000",
        width: 385,
        height: 233,
        position: "absolute",
        bottom: 0,
        right: 0
    },
    button: {
        color: "#FFFFFF",
        marginRight: 20,
        alignSelf: "flex-end",
        borderRadius: 4,
        marginTop: 20
    },
    acceptButton: {
        background: "#00D63C"
    },
    declineButton: {
        background: "#FF0000"
    },
    anotherImg: {
        width: 200,
        height: 200
    },
    anotherName: {
        fontWeight: "bold   "
    },
    anotherAddress: {
        color: "#858585",
        fontSize: 20
    }
}

const RestaurantContentStyle = {
    title: {
        display: "flex",
        height: 50,
        width: "100%",
        alignItems: "center",
        paddingLeft: 30,
        borderBottom: "1px solid rgba(0, 0, 0, 0.25)"
    },
    content: {
        padding: "20px 200px 20px 80px",
    },
    search: {
        textAlign: "right",
        width: "100%"
    },
    searchInput: {
        width: 300,
        marginRight: "10px",
        borderRadius: 4,
    },
    searchButton: {
        background: "#7FAD39",
        borderRadius: 4,
        color: "#FFFFFF",
        width: 130
    },

    RestaurantItemStyle,
    RestaurantInfoStyle
}

export default RestaurantContentStyle;