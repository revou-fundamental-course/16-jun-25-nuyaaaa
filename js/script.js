 ScriptProcessorNode
 function hitungKeliling() {
            // Ambil nilai dari input
            const a = parseFloat(document.getElementById('sisiA').value);
            const b = parseFloat(document.getElementById('sisiB').value);
            const c = parseFloat(document.getElementById('sisiC').value);

            // Validasi input
            if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
                document.getElementById('hasilKeliling').textContent = 'Mohon masukkan nilai yang valid untuk semua sisi!';
                return;
            }

            // Hitung keliling
            const keliling = a + b + c;

            // Tampilkan hasil
            document.getElementById('hasilKeliling').innerHTML = 
                `Keliling segitiga dengan sisi a=${a}, b=${b}, c=${c} adalah <strong>${keliling.toFixed(2)}</strong>`;
        }

        function hitungLuas() {
            // Ambil nilai dari input
            const alas = parseFloat(document.getElementById('alas').value);
            const tinggi = parseFloat(document.getElementById('tinggi').value);

             // Validasi input
            if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
                document.getElementById('hasilLuas').textContent = 'Mohon masukkan nilai yang valid untuk alas dan tinggi!';
                return;
            }

             // Hitung luas
            const luas = 0.5 * alas * tinggi;

            // Tampilkan hasil
            document.getElementById('hasilLuas').innerHTML = 
                `Luas segitiga dengan alas=${alas} dan tinggi=${tinggi} adalah <strong>${luas.toFixed(2)}</strong>`;
        }
