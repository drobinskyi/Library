export default class CardView {
    constructor(container) {
        this.container = container;
    }

    printAllCards(data){
        let table = $('#cards');
        let str = ``;
        data.forEach(card => {
            let returnBook = ``;
            if (card.return_date == null){
                returnBook = `<img class="table_icon" id="return_img"  src="./../../src/img/icons/act_back.png" alt="" srcset="">`
            } else {
                returnBook = `<div class="return_date">${card.return_date}</div>`
            }
            str += `
            <tr>
                <td>${card.id}</td>
                <td>${card.visitor}</td>
                <td>${card.book}</td>
                <td class="cell_center">${card.borrow_date}</td>
                <td class="return_btn cell_center" data-id="${card.id}">
                    ${returnBook}                   
                </td>
            </tr>    
            `
        });
        table.html(str);
    }

    generateAllVisitors(data){
        let select = $('#visitor_select');
        let str =  ``;
        data.forEach(visitor => {
            str += `
            <option value="${visitor.name}">${visitor.name}</option>
            `
        })
        select.html(str);
    }

    generateAllBooks(data){
        let select = $('#book_select');
        let str =  ``;
        data.forEach(book => {
            str += `
            <option value="${book.name}">${book.name}</option>
            `
        })
        select.html(str);
    }
}