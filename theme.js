/*
    Theme Section Logic for day theme and night theme:
    function - themeDarkDay
    //mainContainer - dayBorderColor / nightBorderColor
    //questionContainer - dayBoxColor / nightBoxColor
    //optionContainer - optionDayBoxColor / dayNightBoxColor
    //boxOption - dayBoxColor / nightBoxColor

    Key Press Event 
    O , N ==> dark theme
    B , D ==> day theme
    */ 

$("body").on("keypress", function(event){
    let key = event.key;
    themeDarkDay(key)
})
function themeDarkDay(key){
    //setting approprivate theme to variables
    if (key == "O" || key == "o" || key == "n" || key == "N"){
        //setting "night" to settheme
        setTheme = "night";
        removeTheme = "day"
    }
    if (key == "B" || key == "b" || key == "d" || key == "D"){
        //setting "day" to nightTheme
        setTheme = "day";
        removeTheme = "night"
    }
    //this is DOM section for changing appropriate color
    //mainContainer - dayBorderColor / nightBorderColor
    $("#mainContainer").addClass(`${setTheme}BorderColor`);
    $("#mainContainer").removeClass(`${removeTheme}BorderColor`);
    //questionContainer - dayBoxColor / nightBoxColor
    $("#questionContainer").addClass(`${setTheme}BoxColor`);
    $("#questionContainer").removeClass(`${removeTheme}BoxColor`);
    //optionContainer - optionDayBoxColor / dayNightBoxColor
    $("#optionContainer").addClass(`${setTheme}OptionBoxColor`)
    $("#optionContainer").removeClass(`${removeTheme}OptionBoxColor`)
    //boxOption - dayBoxColor / nightBoxColor
    $("#boxOption").addClass(`${setTheme}BoxColor`);
    $("#boxOption").removeClass(`${removeTheme}BoxColor`);
    //full body day / night
    $("body").addClass(setTheme);
    $("body").removeClass(removeTheme);
}
