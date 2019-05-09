class Submenu extends React.Component {
    render() {
        if (this.props.data.length > 0) {
            return (
                <div className="submenu">
                    {console.log(this.props.data)}
                    <ul>
                        {this.props.data.map((menuitem, i) => (
                            <li key={i}><a href={menuitem.url}>{menuitem.title}</a></li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Submenu