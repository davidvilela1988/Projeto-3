$(document).ready(function () {
  $("#phone").mask("(00)00000-0000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: "Por favor, insira o seu nome",
      email: "Por favor, insira o seu e-mail",
      phone: "Por favor, insira o seu telefone",
    },
    invalidHandler: function (event, validador) {
      let incorrectInputs = validador.numberOfInvalids();
      if (incorrectInputs) {
        alert(`Existem ${incorrectInputs} campo(s) incorreto(s)`);
      }
    },
  });
});
