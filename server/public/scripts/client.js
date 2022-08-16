console.log('js sourced');
$(readyNow);

function readyNow() {
    $('#add-button').on('click', addTask);
    getTasks();
    console.log('jqrn');

}

// request current info from database

function getTasks() {
    console.log('before AJAX');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        $('#list').empty();
        for (let i = 0; i < response.length; i++) {
            let tasks = response[i];
            $('#list').append(`
            <tc>
                <div>
                <tr>    
                    <td>${tasks.task}</td>
                    <button class="toggle">Uncompleted</button>
                    <button class="remove">Remove Task</button>
                </tr>
                </div>
            </tc>       
            `);
        }
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
}

//POST new tasks to sql before returning the new data with getTasks, and clear the input field

function addTask() {
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            // id: $('').val(),
            task: $('#new-task').val(),
            // completed: $('').val(),
        }
    }).then(function (response) {
        getTasks();
        // $('#new-tasks').val('');
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
}