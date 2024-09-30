const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 0 10px 0 #ddd",
        border: "1px solid #ddd",
        diplay: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return <div style={cardStyle}>{children}</div>
}

export default Card