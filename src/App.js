
import Component from './Component.js';
import Header from './Header.js';
import AnimalList from './AnimalList.js';
import images from './data/images.js';
import FilterAnimals from './FilterAnimals.js';
import AddImage from './AddImage.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const props = { animal: images };
        const animalList = new AnimalList(props);
        const animalListDOM = animalList.renderDOM();
        dom.appendChild(animalListDOM);

        const filterAnimalsProps = {
            animals: images,
            onFilter: (animalKeyword) => {
                let filteredAnimals;
                if(animalKeyword === 'all') {
                    filteredAnimals = images;
                }
                else {
                    filteredAnimals = images.filter(animal => {
                        return animal.keyword === animalKeyword;
                    });
                }
                const updateProps = { animal: filteredAnimals };
                animalList.update(updateProps); 
            }
        };
        const onAddProps = {
            animals: images,
            onAdd: (image) => {
                images.push(image);
            }
        };

        const filterAnimals = new FilterAnimals(filterAnimalsProps);
        const filterAnimalsDOM = filterAnimals.renderDOM();
        const filterSection = dom.querySelector('#filter');
        filterSection.appendChild(filterAnimalsDOM);


        const addImageForm = new AddImage(onAddProps);
        const addImageFormDOM = addImageForm.renderDOM();
        const addImageFormSection = dom.querySelector('#add-image-form');
        addImageFormSection.appendChild(addImageFormDOM);
    }


    renderHTML() {
        return /*HTML*/`
            <div>

                <main>
                    <section id="filter" class="roboto"></section>
                    <section id="animal-list" class="roboto"></section>
                    <section id="add-image-form" class="roboto"></section>
                </main>
            </div>
        `;
    }
}

export default App;