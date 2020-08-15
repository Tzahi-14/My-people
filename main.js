const myPeople = function () { 
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=10',
        success: function (data) {
            const peopleList = data.results
            const source = $("#people-template").html()
            const template = Handlebars.compile(source)
            const newHTML = template( peopleList)
            $(".people-list").append(newHTML)
            console.log(peopleList);
        },
        error: function (xhr, text, error) {
            $("body").append(`<img id="error" src="https://media.makeameme.org/created/you-get-an-5c12b2.jpg">`)
            console.log("you get some error");
        }
    });
}

myPeople()

