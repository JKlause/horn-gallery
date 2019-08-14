import Component from './Component.js';

class AddImage extends Component {

    onRender(submit) {
        const onAdd = this.props.onAdd;

        submit.addEventListener('event', () => {
            event.preventDefault();
            const addImageForm = document.getElementById('form');
            const formData = new FormData(addImageForm);
            onAdd({
                url: formData.url,
                title: formData.title,
                description: formData.description,
                keyword: formData.keyword,
                horns: formData.horns,
            });
        });
    }

    renderHTML() {
        return /*html*/`
        <form id="form">
            <label for="url">Input Image Path Here</label>
            <input name="url" type="text">
            <label for="title">Input Title Here</label>
            <input name="title" type="text">
            <label for="description">Input Description Here</label>
            <input name="description" type="text">
            <label for="keyword">Input Keyword Here</label>
            <input name="keyword" type="text">
            <label for="horns">Input Number of Horns Here</label>
            <input name="horns" type="number">
            <label for="submit">Submit Your New Animal</label>
            <input name="submit" type="submit">
        </form>
    `;
    }
}

export default AddImage;