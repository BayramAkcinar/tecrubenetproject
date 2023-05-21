import Link from "next/link";

export default function Footer() {
  return (
<footer class="bg-gray-400">
  <div class="container mx-auto py-4 text-center">
    <div class="mt-2">
      <a href="#" class="text-blue-500 hover:text-blue-700 mr-4">Hakkımızda</a>
      <a href="#" class="text-blue-500 hover:text-blue-700 mr-4">Koşullar</a>
      <a href="#" class="text-blue-500 hover:text-blue-700">Gizlilik Politikası</a>
      <br></br>
      <p>&copy; Tüm hakları saklıdır.</p>
    </div>
  </div>
</footer>
  );
}
