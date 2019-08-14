
import Component from './Component.js';
import Header from './Header.js';
import AnimalList from './AnimalList.js';
import image from './data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = { animal: image };
        const animalList = new AnimalList(props);
        const animalListDOM = animalList.renderDOM();
        dom.appendChild(animalListDOM);
    }


    renderHTML() {
        return /*HTML*/`
            <div>

                <main>
                    <section id="filter" class="roboto"></section>
                    <section id="animal-list" class="roboto"></section>
                </main>
            </div>
        `;
    }
}

export default App;