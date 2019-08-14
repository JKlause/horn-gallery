import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img src="https://africanvoices.com/avblog/wp-content/uploads/2016/02/shofarhorn.jpg" alt="horn logo">
                <h1>All Things Horns</h1>
            </header>
        `;
    }
}

export default Header;