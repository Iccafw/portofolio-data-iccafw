# Icca Firstika Wibowo — Data Analytics Portfolio

Situs portofolio satu halaman (static site — HTML/CSS/JS murni, tanpa build step) berisi 6 studi kasus data analytics/data science, skills, sertifikasi, dan pengalaman.

## Struktur file

```
portfolio-site/
├── index.html     ← seluruh konten halaman
├── style.css      ← styling & design tokens
├── script.js      ← nav mobile + accordion proyek
└── README.md
```

## Menjalankan di lokal

Tidak perlu instalasi apa pun. Buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
cd portfolio-site
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Upload ke GitHub

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPO` dengan repo GitHub kamu (mis. `iccafw01/portfolio`).

## Deploy dengan GitHub Pages (gratis)

1. Buka repo di GitHub → tab **Settings** → **Pages** (di sidebar kiri).
2. Di bagian **Build and deployment**, pilih source **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)` → klik **Save**.
4. Tunggu ~1 menit, lalu situs akan aktif di:
   `https://USERNAME.github.io/NAMA-REPO/`
5. (Opsional) Kalau ingin muncul di `https://USERNAME.github.io/` langsung, beri nama repo persis `USERNAME.github.io`.

Setiap kali push perubahan baru ke branch `main`, GitHub Pages otomatis re-deploy dalam ~1 menit.

## Sebelum publish — cek & sesuaikan ini

Beberapa link masih diarahkan ke profil GitHub umum (`github.com/iccafw01`) karena repo spesifiknya belum diketahui. Cari komentar/​link berikut di `index.html` dan ganti sesuai repo asli tiap proyek:

- **Project 2** (Analisis Harga Rumah Jaksel/Tebet) — ganti link ke repo aslinya.
- **Project 3** (Analisis Penjualan Percetakan) — ganti link ke repo aslinya.
- **Project 4** (Thesis — Fitur Fisik Audio) — ganti link ke repo aslinya (jika ada).
- **Project 5 & 6** (Car Evaluation, Gender Prediction CNN) — ganti link ke repo/notebook aslinya.

Repo untuk Project 1 (Healthcare No-Show) sudah terisi otomatis dari data di slide: `github.com/iccafw01/healthcare-noshow-sql-analysis` — cek kembali apakah ini benar dan repo-nya publik.

Nomor telepon di bagian Contact sudah dikonfirmasi: `+62 857-4118-7255`.

Situs ini dibuat dalam Bahasa Inggris (mengikuti gaya deck profil utama), berbeda dari CV yang preferensinya full Bahasa Indonesia. Kalau kamu mau versi Bahasa Indonesia dari situs ini, tinggal minta ke Claude untuk diterjemahkan.

## Menambah proyek baru

Salin satu blok `<div class="project-row">...</div>` di `index.html` pada bagian `#projects`, ubah isinya, dan urutkan ulang `p-idx` (01, 02, dst.) sesuai kebutuhan.
