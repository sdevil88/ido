function valid(){
  const details = {
    name: "",
    password: "",
    dreturn: function()
    {
        details.name = document.getElementById("name").value ;
        details.password = document.getElementById("password").value ;
        return this.uname+this.password;
    },
    check: function()
    {
        


        if(details.name==="sagar" && details.password==="ghimire")
        {
            alert("login ");
            window.location="index.html";
        }else{
            alert("login failed ");
            return false;
        }
    }

  }
    details.dreturn();
    details.check();

}