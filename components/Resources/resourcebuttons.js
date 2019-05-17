export default class ResourceButtons extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
            let hiddenItems = document.querySelectorAll('.filter-hidden');
            if (hiddenItems) {
                hiddenItems.forEach(item => {
                    item.classList.remove('filter-hidden');
                })
            }
        } else {
            e.currentTarget.classList.add('active')
            let filterClass = e.currentTarget.getAttribute('data-name');
            let listOfItems = document.querySelectorAll(`.resource-item:not(.${filterClass})`);
            listOfItems.forEach(item => {
                item.classList.add('filter-hidden');
            })
        }
    }

    render() {
        return (
            <div className="filters-container">
                {this.props.data.map((item, i) => (
                    <button key={i} data-name={`${item.slug}`} onClick={((e) => this.handleClick(e))}>{item.name}</button>
                ))}
            </div>
        )
    }
}