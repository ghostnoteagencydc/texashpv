import Link from "next/link";
import fetch from 'isomorphic-unfetch';

import Header from "../components/header";
import ResourceButtons from '../components/Resources/resourcebuttons';
import ResourceCategories from '../components/Resources/resourcecatgories';

import '../css/resources.css';


class Resources extends React.Component {
    constructor(props) {
        super(props);

    }

    static async getInitialProps() {
        const res = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');
        const menu = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');
        const filters = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');
        const data = await res.json()
        const menudata = await menu.json()
        const filtersdata = await filters.json()


        const filteredres = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');
        return {
            resources: data,
            menudata,
            filtersdata
        }
    }


    render() {
        return (
            <main>
                <Header menudata={this.props.menudata} />
                <section className="resources-filters">
                    <ResourceButtons data={this.props.filtersdata} />
                </section>
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
                                    <h1>{item.title}</h1>
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


Resources.getInitialProps = async function () {
    const res = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/resource');
    const menu = await fetch('https://hpvtexas.wpengine.com/wp-json/better-rest-endpoints/v1/menus/main');
    const filters = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource_type');
    const data = await res.json()
    const menudata = await menu.json()
    const filtersdata = await filters.json()


    const filteredres = await fetch('https://hpvtexas.wpengine.com/wp-json/wp/v2/resource?filter[resource_type]=resource-type-2');
    return {
        resources: data,
        menudata,
        filtersdata
    }
}

export default Resources;
