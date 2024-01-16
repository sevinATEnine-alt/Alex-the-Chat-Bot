var listBotData = {
    '<greetings>':['hello', 'hi', 'good morning', 'good night', 'good afternoon'],
    '<goodbyes>':['bye', 'see you later', 'bye-bye', 'good bye']
}

function compile(data) {
    count = 0;
    for (i of data) {
        if(typeof(i)==='string') {
            if(Object.keys(listBotData).includes(i)) {
                var temp = Object.entries(data);
                var temp2 = Object.entries(listBotData);
                temp[count][0][0] = temp2[count][0][1];
                data = Object.fromEntries(temp);
            }
        }
        count++;
    }
}

function loadBotData(name) {

    var questions = {"data-response":"success",
        "statments":{
            "<greetings>":"Hello!",
            "<goodbyes>":"Bye!"
        },
        "questions":{
            "weather":"Unknown weather. Sorry."
        },
        "personal-questions":{
            "favorite-color":"I like all colors!",
            "":""
        }
    }


    if (name === 'questions') {
        return compile(questions)
            
    } else {
        return {
            "data-response":"failure"
        }
    }
}