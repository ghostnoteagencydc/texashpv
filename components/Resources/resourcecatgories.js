export default class ResourceCategories extends React.Component {
    render() {
        if (this.props.data) {
            return (
                <div className="categories-container">
                    {this.props.data.map((item, i) => (
                        <span key={i}>{item.name}</span>
                    ))}
                </div>
            )
        } else {
            return null
        }
    }
}