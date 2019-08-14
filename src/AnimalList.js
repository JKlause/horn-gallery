import Component from './Component.js';
import AnimalCard from './Animal-Card.js';

class AnimalList extends Component {

    onRender(dom) {
        const animals = this.props.animal;

        animals.forEach(animal => {
            const props = { animal: animal };
            const animalCard = new AnimalCard(props);
            const animalCardDOM = animalCard.renderDOM();
            dom.appendChild(animalCardDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul id="animal-cards"></ul>
        `;
    }
}

export default AnimalList;