export default class VisitorView {
    constructor(container) {
        this.container = container;
    }

    printAllVisitors(data){
        $('table').css({'width': '80%'})
        let table = $('#visitors');
        
        let str = ``;
        data.forEach(visitor => {
            str += `
            <tr>
                <td>${visitor.id}</td>
                <td>${visitor.name}</td>
                <td class="formatted-phone">${visitor.phone}</td>
                <td class="edit_item" data-id="${visitor.id}" onclick="toggleModal(event)">
                    <img class="table_icon" id="edit_img"  src="./../../src/img/icons/act_edit.png" alt="" srcset="">
                </td>
            </tr>   
            `
        });
        table.html(str);
    }
}