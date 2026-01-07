# Contact Form Test Checklist

## Test URL
- http://localhost:9002/contact

## Manual Test Scenarios

### 1. CAPTCHA Widget Görünüyor mu?
- [ ] Contact form'u açın
- [ ] Message input'undan sonra CAPTCHA widget'ı görülmeli
- [ ] Widget "I'm not a robot" checkbox göstermeli

### 2. CAPTCHA Gerektiriyor mu?
- [ ] Form'u CAPTCHA tamamlamadan submit etmeyi deneyin
- [ ] Hata göstermeli: "Please complete the CAPTCHA."

### 3. Rate Limiting Test (Aynı IP'den hızlı istek)
- [ ] Tüm alanları doldurun + CAPTCHA tamamlayın
- [ ] 1. Submit: Başarılı olmalı ✅
- [ ] 2. Submit: Başarılı olmalı ✅
- [ ] 3. Submit: Başarılı olmalı ✅
- [ ] 4. Submit (1 dakika içinde): "Too many requests" hatası ✅

### 4. HTML Injection Test (XSS Koruması)
- Name alanına şu girelim: `<script>alert('xss')</script>`
- CAPTCHA tamamlayıp submit edin
- Email alındığında script çalışmamalı, sadece text olarak görülmeli

### 5. Email Teslim Kontrolü
- Mesaj gönderildikten sonra iki email alınmalı:
  1. Admin email (erener@apply10.com) - notification
  2. Gönderici email'ine - confirmation

## Browser Console Kontrolü
F12 açıp Console'da hata var mı kontrol edin:
- Turnstile script hataları
- CAPTCHA render hataları
- API çağrı hataları

## Başarı Göstergesi ✅
- CAPTCHA widget görünüyor
- Rate limiting çalışıyor (3 request limit)
- XSS injection'lar bloklanıyor
- Email'ler başarıyla gönderiliyor
