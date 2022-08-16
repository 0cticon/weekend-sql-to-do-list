// console.log('js sourced');
$(readyNow);

function readyNow() {
    $('#add-button').on('click', addTask);
    $('body').on('click', '.remove', removeTask);
    $('body').on('click', '#toggle', toggleComplete);
    getTasks();
    
    // console.log('jqrn');

}

// GET request current info from database
function getTasks() {
    // console.log('before AJAX');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log(response);
        $('#list').empty();
        for (let i = 0; i < response.length; i++) {
            let tasks = response[i];
            $('#list').append(`
            <div>
                <tc>
                    <tr>    
                        <td>${tasks.task}</td>
                        <button id="toggle" data-id="${tasks.id}">Uncompleted</button>
                        <button class="remove" 
                        data-id="${tasks.id}">Remove Task</button>
                    </tr>
                </tc>
            </div>       
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
        $('#new-task').val('');
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
}

// DELETE tasks from database and resend updated info to DOM
// .data('id') refers to data-id for remove button
function removeTask() {
    // console.log('in rt');
    const taskId = $(this).data('id');
    console.log('removed task:', taskId);
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskId}` 
    }).then(function(response) {
        //after delete re GET all tasks
        getTasks();
    }).catch(function(error) {
        console.log(error);
        alert('Something went wrong!');
    });
}

// PUT new value for uncomplete status

function toggleComplete() {
    
    console.log('in toggle');
    
    const completedStatus = $(this).data('id');
    $.ajax({
        type: 'PUT',
        url: `/tasks/${completedStatus}`
    }).then(function(response) {
        // $(this).prop('lable', 'Done!'); //.prop?
        getTasks();
    }).catch(function(error) {
        console.log(error);
        alert('Something went wrong!');
    })

}