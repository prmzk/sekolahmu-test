# sekolahmu-test Front-end #1
### Pertanyaan pertama
**Hasil console log:**</br>
<code>ReferenceError: first is not defined</code></br>
**Penjelasan:**</br>
Variabel <code>first</code> belum terdefinisi pada saat ditulis di console karena kita mendefinisikannya pada suatu scope block <code>if(true)</code> dengan menggunakan
<code>let</code>. Sehingga variabel ini hanya terdefinisi di scope block <code>if(true)</code> tersebut.

### Pertanyaan kedua
**Hasil console log:**</br>
<code>10</code></br>
**Penjelasan:**</br>
Sama dengan sebelumnya, variabel <code>second</code> didefinisikan pada suatu scope block <code>if(true)</code>. Namun, kita menggunakan <code>var</code> pada kasus ini sehingga terdefinisi pada saat ditulis di console. Karena <code>var</code> bersifat global dan tidak terbatas di suatu scope block.