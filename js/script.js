$(function () {

    var addButton = $(".add-button");
    var input = $(".input");
    var list = $(".list");
    var error = $(".error");

    function addTask() {
        if (input.val() === "") {
            error.addClass("display-error-message").removeClass("error-message");
        } else {
            error.addClass("error-message").removeClass("display-error-message");
            var newLi = $('<li>');
            newLi.html('<span class="li-with-value">' + input.val() + '</span>' + '<button class="edit-button">Edit</button><button class="delete-button">Delete</button>');
            list.append(newLi);
            input.val("");
        }
    }

    addButton.on("click", function (e) {
        e.preventDefault();
        addTask();
    });

    input.on("keyup", function (e) {
        if (e.which == 13) {
            addTask();
        }
    });

    list.on("click",".edit-button", function () {
        var editValue = $(this).parent().find('.li-with-value');
        if ($(this).text() == 'Edit') {
            editValue.attr('contenteditable','true').focus();
            $(this).text('Accept');
        } else {
            editValue.attr('contenteditable','false');
            $(this).text('Edit');
        }
    });

    list.on("click",".delete-button", function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

});
