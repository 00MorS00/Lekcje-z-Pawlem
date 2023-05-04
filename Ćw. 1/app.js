// camelCase 
let object = {
    name: "Stanisław Mordes",
    description: "Kiedy Piotrek zapytał się mnie, czy nie chcę nauczyć się programowania, odpowiedziałem – „no pewnie”. Jak przekonać się, czy „coś” jest dla mnie, nie próbując tego? Nie wiem. Lubię się rozwijać, budować moje poczucie własnej wartości. Amator ergometru wioślarskiego i naturalnej kulturystyki.",
    picture: "https://owlasnychsilach.pl/wp-content/uploads/2023/04/PL_Legitymacja_szkolna_te3tyfpw-233x300.jpg,",
    altPhotoLabel: "Stanisław"
}
// linijka poniżej nic nie robi, do wyjebania
document.getElementById("1")
let h1 = document.getElementById("1")
// do zadań gotowych do sprawdzenia, nie zostawiać console.logów, no chyba że zadanie tego wymaga
// przypisanie wartości do obiektu html nie powinno znajdować się w console.log
console.log(h1.innerText = object.name)
document.getElementById("2")
let p = document.getElementById("2")
console.log(p.innerText = object.description)
let img = document.getElementById("3")
console.log(img.src = object.picture)
document.getElementById("4")
let alt = document.getElementById("4")
console.log(img.alt = object.altPhotoLabel)


