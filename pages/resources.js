import fetch from 'isomorphic-unfetch';

import ResourceSearch from '../components/Resources/resourcesearch';
import ResourceButtons from '../components/Resources/resourcebuttons';
import ResourceCategories from '../components/Resources/resourcecatgories';

import '../css/resources.css';


class Resources extends React.Component {
    constructor(props) {
        super(props);

    }

    static async getInitialProps() {
        const res = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');
        const filters = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');
        const data = await res.json()
        const filtersdata = await filters.json()


        // const filteredres = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');
        return {
            resources: data,
            filtersdata
        }
    }


    render() {
        return (
            <main>
                <ResourceSearch />
                <ResourceButtons data={this.props.filtersdata} />
                <section className="resources-container">
                    {this.props.resources.map(item => {
                        let termArr = [];
                        if (item.terms) {
                            item.terms.forEach(term => {
                                termArr.push(term.slug);
                            })
                        }
                        let termStr = termArr.join(' ');
                        return (
                            <a href={item.permalink} className={`resource-item ${termStr}`} key={item.id}>
                                <div>
                                    <h1 className="resource-title">{item.title}</h1>
                                    <ResourceCategories data={item.terms} />
                                </div>
                            </a>
                        )
                    }

                    )}
                </section>
            </main>
        )
    }
};

export default Resources;