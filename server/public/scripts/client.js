console.log('js sourced');
$(readyNow);

function readyNow() {
    // $('#add-button').on('click', addTask);
    getTasks();
    console.log('jqrn');

}

function getTasks() {
    console.log('before AJAX');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
    //     $('#list').empty();
    //     for (let i = 0; i < response.length; i++) {
    //         let tasks = response[i];
    //         $('#list').append(`
    //         <tr>
    //             <td></td>        
    //             <td></td>        
    //             <td></td>        

    //         </tr>
            
    //         `)
    //     }
    })
}