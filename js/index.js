const mainModule = angular.module("mainModule", []); // создаем модуль
let $modal = document.querySelector(".main_modal");
let $purchase = document.querySelector(".purchase");
let $purchase2 = document.querySelector(".purchase2");
let $purchase3 = document.querySelector('.purchase3');
// первая кнопка оформить заказ
$purchase.onclick = getOrder;
// вторая кнопка оформить заказ
$purchase2.onclick = getOrder;
// третья кнопка Заказать звонок
$purchase3.onclick = getOrder;
function getOrder() {
  // оформить заказ
  $modal.style.display = "block";
}

// закрытие формы для заказа ниже
$modal.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("main_modal") ||
    event.target.classList.contains("img")
  ) {
    $modal.style.display = "none";
    $ups.style.display = "none";
  }
});

// кнопка заказть двери ниже
let $buy_door = document.querySelector(".btn");
let $modal2 = document.querySelector(".main_modal2");
let $ups = document.querySelector(".ups");
let ans = [];
$buy_door.onclick = () => {
  let name_client = document.querySelector(".name").value;
  let phone_client = document.querySelector(".number").value;
  if (name_client == "" || phone_client == "") {
    $ups.style.display = "block";
  } else {
    ans.push(name_client, phone_client);
    console.log(ans);
    // отправка данных на сервер
    let go = new XMLHttpRequest();
    go.onreadystatechange = function () {
      if ((go.readyState = 2)) {
        $modal.style.display = "none";
        $modal2.style.display = "block";
      }
    };
    go.open("POST", "/purchase", true);
    go.send(JSON.stringify(ans));
  }
};

// закрытие последнего окна (мы с вами свяжемся)
$modal2.addEventListener("click", function (event) {
  if (event.target.classList.contains("main_modal2")) {
    // $modal2.style.display = 'none'
    window.location.href = "index.html";
  }
});

// mainModule.controller("cont1", function ($scope) {});

