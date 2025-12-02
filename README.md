# Boo Technical Test

## 1. Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 2. Durasi Pengerjaan

- Start: 16:36 WIB
- End: 17:00 WIB (Approx)
- Total: ~30 menit (Effective coding time)

## 3. Fitur yang Selesai

- Recreate layout utama dengan **Shadcn UI** & **Tailwind CSS**
- Mock API `/api/question`
- Interaksi (choose option, like button)
- Responsive basic (Mobile stack, Desktop centered)
- Clean Architecture (Separation of UI, Feature components, Hooks)

## 4. Fitur yang Belum

- Komentar (Out of scope for this session)
- Share modal
- Animasi fancy (Basic transitions implemented)

## 5. Apa yang akan Ditingkatkan

- **SSR/ISR**: Saat ini fetch di client side (`useEffect`), bisa dipindah ke `getServerSideProps` untuk SEO lebih baik.
- **Testing**: Menambahkan Unit Test dengan Jest/React Testing Library.
- **Error Handling**: UI Error state yang lebih informatif.
- **A11y**: Meningkatkan aksesibilitas keyboard navigation.
