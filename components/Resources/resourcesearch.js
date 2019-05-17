export default class ResourceSearch extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let searchValue = e.currentTarget.value.toUpperCase();
        let listOfResources = document.querySelectorAll('.resource-item');

        if (document.querySelector('.filters-container button.active')) {
            listOfResources = document.querySelectorAll('.resource-item:not(.filter-hidden)');
        } else {
            listOfResources = document.querySelectorAll('.resource-item');
        }
        console.log(listOfResources);
        listOfResources.forEach(resource => {
            if (resource.children[0].children[0].innerHTML.toUpperCase().indexOf(searchValue) > -1) {
                resource.classList.remove('hidden')
            } else {
                resource.classList.add('hidden');
            }
        })
    }
    render() {
        return (
            <div className="search-container">
                <input type="text" placeholder="Search here" onChange={this.handleChange}></input>
            </div>
        )
    }
}