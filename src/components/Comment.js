function Comment({ user, comment }){
    return (
        <comment>
            <strong>{user}</strong>
            <p>{comment}</p>
        </comment>
    )
}

export default Comment