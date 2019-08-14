import Component from './Component.js';

class FilterAnimals extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
            
        });
    }

    renderHTML() {
        const images = this.props.animals;
        const keywords = getUniqueAnimals(images);
        const optionsHTML = renderOptionsHTML(keywords);

        return /*html*/`
                <select id="keyword" class="custom-select">
                    <option value ="all">Show All</option>
                    ${optionsHTML}
                </select>
            `;
    }
}

function renderOptionsHTML(keywords) {
    const optionsArray = keywords.map(option => {
        return /*html*/`
        <option value ="${option}">${option}</option>
        `;
    });

    return optionsArray.join('');
}

function getUniqueAnimals(images) {
    const keywords = [];
    images.forEach(animal => {
        if(!keywords.includes(animal.keyword)) {
            keywords.push(animal.keyword);
        }
    });
    keywords.sort();
    return keywords;
}

export default FilterAnimals;