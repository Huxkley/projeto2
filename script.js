document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  if (nome.trim() === "" || telefone.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  var tbody = document.getElementById("tbody");
  var newRow = tbody.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  cell1.textContent = nome;
  cell2.textContent = telefone;

  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
});
