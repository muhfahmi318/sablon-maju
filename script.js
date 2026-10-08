const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const orderButtons = document.querySelectorAll('.mini-order');
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product') || 'produk sablon';
    const message = `Halo Sablon Maju, saya ingin order ${productName}. Bisa bantu saya?`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  });
});

const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const nama = formData.get('nama') || 'Customer';
    const whatsapp = formData.get('whatsapp') || '';
    const produk = formData.get('produk') || 'Custom';
    const jumlah = formData.get('jumlah') || '1';
    const ukuran = formData.get('ukuran') || 'Custom';
    const jenis = formData.get('jenis') || 'Belum tahu';
    const catatan = formData.get('catatan') || 'Tidak ada catatan';

    const message = [
      'Halo Sablon Maju, saya ingin order produk custom.',
      `Nama: ${nama}`,
      `WhatsApp: ${whatsapp}`,
      `Produk: ${produk}`,
      `Jumlah: ${jumlah}`,
      `Ukuran: ${ukuran}`,
      `Jenis sablon: ${jenis}`,
      `Catatan: ${catatan}`
    ].join('\n');

    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
    orderForm.reset();
  });
}

const waQuickOrder = document.getElementById('waQuickOrder');
if (waQuickOrder) {
  waQuickOrder.addEventListener('click', () => {
    const message = 'Halo Sablon Maju, saya ingin konsultasi produk custom.';
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank', 'noopener,noreferrer');
  });
}
