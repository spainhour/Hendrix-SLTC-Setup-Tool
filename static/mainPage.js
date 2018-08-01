$("#adminSubmit").click(function () {
    if ($('#password').val() == "HendrixWarriors") {
        window.location.href="admin";
        return false;
    } else {
      alert("Invalid password")
    }
});
