export const getUserLogin = () => {
  const locUser = JSON.parse(localStorage.getItem("user"));
  return locUser ? locUser[0] : undefined;
};

export function formatTanggalIndonesia(tanggal) {
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [tahun, bulan, hari] = tanggal.split("-");

  return `${parseInt(hari)} ${bulanIndonesia[parseInt(bulan) - 1]} ${tahun}`;
}

export function getNIS(tahun, jumlahSiswaSaatIni) {
  const blok = String(Math.floor(jumlahSiswaSaatIni / 100) + 1).padStart(
    2,
    "0"
  );

  const urut = String((jumlahSiswaSaatIni % 100) + 1).padStart(3, "0");
  return `${tahun}${blok}${urut}`;
}

export function convertToGoogleSheetsFormat(dataArray) {
  // Hilangkan field created_at
  const cleanedData = dataArray.map(({ created_at, ...rest }) => rest);

  // Ambil header dari kunci object pertama
  const headers = Object.keys(cleanedData[0]);

  // Buat baris CSV (header + data)
  const rows = [
    headers.join(","), // baris header
    ...cleanedData.map((obj) =>
      headers
        .map((key) => `"${String(obj[key]).replace(/"/g, '""')}"`)
        .join(",")
    ),
  ];

  // Gabungkan jadi satu string CSV
  return rows.join("\n");
}
