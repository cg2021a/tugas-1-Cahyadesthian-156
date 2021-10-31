# tugas-1-Cahyadesthian-156
tugas-1-Cahyadesthian-156 created by GitHub Classroom
                  
### 📗 Tugas 1
1. Cari benda di sekitar Anda yang berawalan huruf A, F, atau K.
2. Letakkan benda tersebut di atas permukaan datar: meja, lantai, dsb.
3. Ambil foto benda tersebut dari empat sudut pandang yang berbeda: kanan atas, kiri atas, belakang atas, depan atas (sudut kemiringan bebas).
4. Klik URL undangan tugas untuk memulai pembuatan repo tugas Anda di GitHub.
5. Buat sebuah file README.md yang berisikan nama benda berikut empat foto yang telah Anda ambil sebelumnya.
6. Jangan lupa untuk melakukan commit dan push perubahan.
Deadline: Rabu, 2021/09/22, 07.00 AM                  
<img src="foto-benda/flashdisk-kanan.jpg" width="200"><img src="foto-benda/flashdisk-kiri.jpg" width="200"><img src="foto-benda/flashdisk-belakang.jpg" width="200"><img src="foto-benda/flashdisk-depan.jpg" width="200">
                      
#### 📗 Lanjutan Tugas 1
Membuat sebuah aplikasi Grafika berbasis WebGL pada repo tugas yang telah dibuat di tugas sebelumnya dengan spesifikasi di bawah ini:
1. Aplikasi tersusun atas file-file HTML, JavaScript, dan CSS (opsional).
2. Aplikasi terdiri dari satu Canvas saja.
3. Aplikasi JavaScript mengandung definisi verteks-verteks yang menyusun bentuk dari benda yang difoto pada penugasan sebelumnya: Pilih dua dari empat foto.
4. Definisi verteks mencakup elemen: posisi (x, y) dan warna (r, g, b), sebagaimana tampak pada foto-foto yang telah terpilih.
5. Bentuk sebagaimana tampak pada salah satu foto pilihan digambar di sisi kiri Canvas: Terletak di clip space antara aksis X = -1.0 dan X = 0.0.
6. Bentuk sebagaimana tampak pada satu foto pilihan lainnya digambar di sisi kanan Canvas: Terletak di clip space antara aksis X = 0.0 dan X = 1.0.
7. Hasil gambar pada Canvas sebelah kanan dianimasikan secara vertikal, memantul-mantul di antara dinding atas dan bawah Canvas, dengan kecepatan 0.0xxx unit, di mana xxx adalah tiga digit terakhir NRP.
8. Jangan lupa untuk melakukan commit dan push perubahan.
Deadline: Rabu, 2021/10/06, 07.00 AM
<img src="dokumentasi-tugas-1.gif" width="400">
                      
### 📗 Tugas Materi Dasar-dasar Three.js
Tugas Individu (waktu 1 pekan)
1. Buat dan tampilkan beberapa geometri dan diberi animasi, beberapa obyek ditampilkan wireframe
2. Gunakan beberapa jenis material 
3. gunakan beberapa jenis lighting (AmbientLight, HemisphereLight, DirectionalLight, PointLight, Spotlights)
.             

Pada pengerjaan tugas ini, beberapa gemoetri yang digunakan adalah kubus/box,sphere,cone,torus, dan octahderon.
Material yang digunakan adalah MeshBasicMaterial, MeshLambertMaterial, dan MeshPongMaterial. Poperties yang digunakan diantaranya adalah color, wireframe, texture, flatshading, dan shininess dengan material yang bersesuaian
Light yang digunakan AmbientLight, HemisphereLight, DirectionalLight, PointLight, Spotlights dengan beberapa properties yang digunakan diantaranya adalah posisiton dan Helper bagi beberapa lighting yang bersesuaian. Setiap lighting diterapkan dalam file yang terpisah     
<img src="tugas-materi-dasar-threeJs/dokumentasi/ambient.gif" width="300"> <img src="tugas-materi-dasar-threeJs/dokumentasi/directional-light.gif" width="300"> <img src="tugas-materi-dasar-threeJs/dokumentasi/hemisphere.gif" width="300"> <img src="tugas-materi-dasar-threeJs/dokumentasi/point-light.gif" width="300"> <img src="tugas-materi-dasar-threeJs/dokumentasi/spot-light.gif" width="300">
          
            
### 📗 Tugas Materi User Interaction Three.js
Buat obyek baru yang muncul diposisi dan warna secara random yang semakin lama semakin cepat, Berhenti tambah obyek baru jika jumlah obyek sudah mencapai batas tertentu. 
Pilih 2 obyek pasangan yang memiliki warna yang sama, jika 2 obyek pasangan sudah terpilih, hapus obyek2 tersebut dan tambah skor   
<img src="https://github.com/Cahyadesthian-156/empty/blob/main/prev-tgs2.gif?raw=true" width="1200">       
Pada tugas ini, objek box bertambah dengan batas sebanyak kurang dari 100 box, terdapat pula penambahan kecepatan sampai dengan maximal 550 (dari awalnya 2250 dan berkurang sebesar 100 ), box menjadi putih dan berotasi saat dipilih. Penambahan skor sebesar 20 untuk setiap pasangan kotak yang dipilih.



              
### 📗 Tugas Individu 25 Oktober 2021(Control,Texture,Panorama,Shadow,Fog,Loading Model,Realistic Reflective)     

#### 📃Control-Texture-Panorama-Shadow-Fog
<img src="https://github.com/cg2021a/tugas-1-Cahyadesthian-156/blob/main/tugas-individu-25Oktober2021/dokumentasi/control-texture-panorama-shadow-fog.gif?raw=true" width="800">                                          
Menggunakan OrbitControl dan skybox pada scene background(skybox didapat dari https://polyhaven.com/a/beach_parking) , terdapat shadow yang di cast dari 3 sumber PointLight dengan sebuah PointLight di tengah yang bisa digerakkan melalui dat.gui serta terdapat fog berwarna putih. Texture diterapkan pada BoxGeometry dengan 5 jenis texture yang berbeda. 

      
      
#### 📃Load model gltf dan obj
<img src="https://github.com/cg2021a/tugas-1-Cahyadesthian-156/blob/main/tugas-individu-25Oktober2021/dokumentasi/loading-model.gif?raw=true" width="800">                          
model gltf didapat dari https://sketchfab.com/3d-models/pistol-bbcfe06fb46947f2b11ee483fe1dad52 dan model obj didapat dari https://free3d.com/3d-model/airplane-v1--79106.html


#### 📃Realistic Reflective 
<img src="https://github.com/cg2021a/tugas-1-Cahyadesthian-156/blob/main/tugas-individu-25Oktober2021/dokumentasi/realistic-reflective.gif?raw=true" width="800">                
terdapat OrbitControl dengan scene skybox. Realistic reflective diterapkan pada SphereGeometry dengan MeshPhysicalMaterial.         
Menggunakan hdr dari https://polyhaven.com/a/fireplace



                          
