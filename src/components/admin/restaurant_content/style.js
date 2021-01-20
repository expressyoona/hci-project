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
    tab: {

    },

    // Restaurant Item
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

export default RestaurantContentStyle;