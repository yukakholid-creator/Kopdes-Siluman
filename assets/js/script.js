/**
 * Koperasi Desa Merah Putih Desa Siluman - Standalone JS Utility
 * Desa Siluman, Kec. Pabuaran, Kab. Subang - Jawa Barat
 */

console.log('Koperasi Merah Putih Desa Siluman Microsite Loaded Successfully.');

// Helper utility for WhatsApp Message Formatting
window.formatWhatsAppOrder = function (productName, price, whatsappNum) {
  const text = encodeURIComponent(
    `Halo Koperasi Merah Putih Desa Siluman, saya berminat dengan produk: ${productName} (${price}). Mohon info pemesanannya.`
  );
  window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
};
