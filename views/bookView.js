export default class BookView {
    constructor(container) {
        this.container = container;
    }

    printAllBooks(data){
        let table = $('#books');
        let str = ``;
        data.forEach(book => {
            str += `
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.publisher}</td>
                <td>${book.pages}</td>
                <td>${book.count}</td>
                <td class="edit_item" data-id="${book.id}" onclick="toggleModal(event)">
                    <img class="table_icon" id="edit_img" src="./../../src/img/icons/act_edit.png" alt="" srcset="">
                </td>
                <td class="delete_item" data-id="${book.id}">
                    <img class="table_icon" id="delete_img" src="./../../src/img/icons/act_delete.png" alt="" srcset="">
                </td>
            </tr>    
            `
        });
        table.html(str);
    }
}