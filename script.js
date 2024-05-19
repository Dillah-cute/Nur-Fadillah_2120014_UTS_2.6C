const form = document.getElementById('form-penjumlahan');
const hasilDiv = document.getElementById('hasil');
const hitungButton = document.getElementById('hitung-button');

hitungButton.addEventListener('click', function() {
    const bilangan1 = parseInt(document.getElementById('bilangan1').value);
    const bilangan2 = parseInt(document.getElementById('bilangan2').value);

    const hasil = bilangan1 + bilangan2;

    hasilDiv.innerHTML = `Hasil penjumlahan ${bilangan1} + ${bilangan2} adalah: ${hasil}`;
});
