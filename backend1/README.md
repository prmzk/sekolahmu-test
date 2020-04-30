# sekolahmu-test Back-end 1
## 1. Notasi O
Fungsi <code>get_first_item(arr)</code> :</br>
Fungsi ini memiliki notasi O konstan atau biasa ditulis O(1). Fungsi ini butuh waktu yang konstan untuk mengembalikan suatu nilai. Jika kita ingin mengetahui komponen pertama pada 5 buah array maka kita butuh 5 kali "waktu" dari fungsi ini, apabila 10 array maka 10 kali, dst.
</br></br>
Fungsi <code>def check_duplicate(arr)</code> :</br>
Fungsi ini menginspect setiap elemen dari suatu array 2 dimensi, sehingga memiliki notasi O(n) dimana n adalah jumlah dari elemen pada array 2 dimensi.
</br></br>
Fungsi <code>Fibonacci</code> :</br>
Fungsi ini merupakan fungsi rekursif sehingga kita harus menjabarkannya Apabila <code>n=1</code> maka akan memiliki notasi O(1). Sehingga menjadi <code> f(n) = f(n-1) + f(n-2) + O(1)</code>. Yang dapat kita ubah menjadi <code>f(n) = O(2^(n-1)) + O(2^(n-2)) + O(1) = O(2^n)</code>
</br></br>

