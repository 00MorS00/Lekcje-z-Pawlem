let object = {
    Name: "Stanisław Mordes",
    Description: "Kiedy Piotrek zapytał się mnie, czy nie chcę nauczyć się programowania, odpowiedziałem – „no pewnie”. Jak przekonać się, czy „coś” jest dla mnie, nie próbując tego? Nie wiem. Lubię się rozwijać, budować moje poczucie własnej wartości. Amator ergometru wioślarskiego i naturalnej kulturystyki.",
    Picture: "https://owlasnychsilach.pl/wp-content/uploads/2023/04/PL_Legitymacja_szkolna_te3tyfpw-233x300.jpg,",
    AltPhotoLabel: "Stanisław"
}
document.getElementById("1")
let h1 = document.getElementById("1")
console.log(h1.innerText = object.Name)
document.getElementById("2")
let p = document.getElementById("2")
console.log(p.innerText = object.Description)
let img = document.getElementById("3")
console.log(img.src = object.Picture)
document.getElementById("4")
let alt = document.getElementById("4")
console.log(img.alt = object.AltPhotoLabel)
