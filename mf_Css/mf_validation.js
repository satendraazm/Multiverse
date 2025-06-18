
// This is the validation js file
// Developed By Nitish Soni
$(document).ready(function () {

    function validationCheck() {
        if ($('#ctl00$P_body$dd_btype').value !== 0 || $('#ctl00$P_body$tb_bname').value != "") {

            if ($('#ctl00$P_body$dd_btype').value == 0) {
                alert("⚠ WARNINNG ! Please Select Battery Type");
                $('#ctl00$P_body$dd_btype').focus();
                return false;
            }

            if ($('#ctl00$P_body$tb_bname').value == 0) {
                alert("⚠ WARNINNG ! Please Enter Date");
                $('#ctl00$P_body$tb_bname').focus();
                return false;
            }
        }

        else {
            alert("⚠ WARNINNG ! Please Select the fields");
            return false;
        }
    }

// End Main 
});