function HideShow() {
    var divDados = document.getElementById("MeusDados").style;    
    if (divDados.display == "none" || divDados.display == "" ) {
        divDados.display = "block";
    } else {
        divDados.display = "none";
    }
}


function VerificaForm(){
    var divCheckBox = document.getElementById("divCheckBox1");
    var DDList = document.getElementById("divDDList1");
	var DivRadio = document.getElementById("divRadio1");

    var itensCheckBox = document.getElementsByName('CheckBox1');

    var nome = document.form1.inputNome.value;
    var ListDDLValue = document.form1.DDList1.value;
    var RadioValue = document.form1.Radio1.value;
    var itensCheckBoxValue = "";


    if (validaNome() == false) {
        return false;
    }
    else if (validaDDL() == false) {
        return false;
    }
    else if (validaCheckBox() == false) {
        return false;

    }
    else if (validaRadio() == false) {
        return false;
    }
    else {
        alert("O formulario sesrá enviado com as seguintes informações:\n"+ "Nome: "+ nome + "\nSua fruta preferida é: " + ListDDLValue + "\nQuando cosutma comer essa fruta: " + itensCheckBoxValue + "Genero: " + RadioValue)
    }
	
	
    function validaNome() {
        if (nome == "" || nome == null) {
            document.form1.inputNome.focus();
            return false;
        }
    }
    function validaDDL() {
        if (ListDDLValue == "" && DDList.style.display == "") {
            DDList.style.display = "block";
        }
        else if (!ListDDLValue == "") {
            return;
        }
        else {
            alert("Escolha sua Fruta preferida");
            document.form1.DDList1.focus();
            return false;
        }
    }
	
    function validaCheckBox() {
        if (itensCheckBoxValue == "" && divCheckBox.style.display == "" && !ListDDLValue == "") {
            divCheckBox.style.display = "block";
        }
        else if (divCheckBox.style.display == "block") {
            for (var i = 0; i < itensCheckBox.length; i++) {
                if (itensCheckBox[i].type == 'checkbox' && itensCheckBox[i].checked == true)
                    itensCheckBoxValue += itensCheckBox[i].value + "\n";
            }
            if (itensCheckBoxValue == "" || itensCheckBoxValue == null) {
                alert("Escolha pelo menos uma opção")
                return false;
            }
        }
        else if (divCheckBox.style.display == "" && itensCheckBoxValue == "") {
            return false;
        }
    }

    function validaRadio() {
        if (DivRadio.style.display == "" && !itensCheckBoxValue == "" || DivRadio.style.display == "none") {
            DivRadio.style.display = "block";
            return false;
        }
        else if (DivRadio.style.display == "" && RadioValue == "") {
            return false;
        }
        else if (RadioValue == "" && DivRadio.style.display == "block") {
            alert("Selecione seu genero ");
            return false;
        }
        

    }


}