import Component from './Component.js';

class AnimalCard extends Component {
    renderHTML() {
        const animal = this.props.animal;
        return /*html*/`
            <li title="${animal.description}" id="hornies">
                <div>
                    <h2>${animal.title}</h2>
                    <h3>${animal.horns} Horn</h3>
                </div>
                <img src="${animal.url}">
            </li>
        `;
    }
}

export default AnimalCard;