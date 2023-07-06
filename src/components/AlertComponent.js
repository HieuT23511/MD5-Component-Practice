export default function AlertComponent(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div className="alert alert-warning" role="alert">
                {props.text}
            </div>
        </>
    )
}