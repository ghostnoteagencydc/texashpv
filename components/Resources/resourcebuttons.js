export default class ResourceButtons extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let hiddenItems = document.querySelectorAll('.hidden');
        if (hiddenItems) {
            hiddenItems.forEach(item => {
                item.classList.remove('hidden');
            })
        }
        let filterClass = e.currentTarget.getAttribute('data-name');
        let listOfItems = document.querySelectorAll(`.resource-item:not(.${filterClass})`);
        console.log(listOfItems);
        listOfItems.forEach(item => {
            item.classList.add('hidden');
        })
    }

    render() {
        return (
            <div className="categories-container">
                {this.props.data.map((item, i) => (
                    <button key={i} data-name={`${item.slug}`} onClick={((e) => this.handleClick(e))}>{item.name}</button>
                ))}
            </div>
        )
    }
}