import { gapi } from "gapi-script";
const CLIENT_ID =
  "116636762159-4chv55p11kuqq7rl59dh4b1o91hja6ou.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const SPREADSHEET_ID = "1H0E1vOeXlCa-gswVXlVlkD-s53jjf3GP5qC8ptPSKPc";
const SHEET_NAME = "Sheet1";

const getSheetId = async () => {
  const res = await gapi.client.sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  });

  const sheet = res.result.sheets.find(
    (s) => s.properties.title === SHEET_NAME
  );

  return sheet.properties.sheetId;
};

export const uploadDataSheet = async (responseData) => {
  try {
    const response = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME, // cukup nama sheet saja
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [
          [
            responseData.id,
            responseData.nis,
            responseData.nik,
            responseData.nama,
            responseData.jeniskelamin,
            responseData.tanggallahir,
            responseData.alamat,
            responseData.nohp,
            responseData.email,
            responseData.namaOrtu,
          ],
          //   [
          //     "id",
          //     "nis",
          //     "nik",
          //     "nama",
          //     "jenisKelamin",
          //     "tanggalLahir",
          //     "alamat",
          //     "nohp",
          //     "email",
          //     "namaOrtu",
          //   ],
        ],
      },
    });

    console.log("Response:", response);
    alert("Data berhasil diunggah ke Google Sheets!");
  } catch (error) {
    console.error("Upload error details:", error);
    let errorMessage = "Failed to upload data";

    if (error.result?.error) {
      errorMessage += `: ${error.result.error.message}`;
      if (error.result.error.status === "PERMISSION_DENIED") {
        errorMessage +=
          ". Please check if you have edit permissions for this spreadsheet.";
      }
    } else if (error.message) {
      errorMessage += `: ${error.message}`;
    }

    // alert(errorMessage);
  }
};

export const deleteRow = async (rowIndex) => {
  const sheetId = await getSheetId();

  await gapi.client.sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    resource: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: sheetId,
              dimension: "ROWS",
              startIndex: rowIndex, // Baris ke-N (mulai dari 0)
              endIndex: rowIndex + 1, // Hapus hanya satu baris
            },
          },
        },
      ],
    },
  });

  alert(`Baris ke-${rowIndex + 1} berhasil dihapus.`);
};

const initializeGoogleAPI = async () => {
  let isSignedIn = false;
  let isLoading = true;
  try {
    await gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4",
          ],
        });

        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.isSignedIn.listen((isSignedIn) => {
          isSignedIn(isSignedIn);
          if (!isSignedIn) {
            authInstance.signIn();
          }
        });

        // Set initial state
        setIsSignedIn(authInstance.isSignedIn.get());

        // If not signed in, attempt silent sign-in first
        if (!authInstance.isSignedIn.get()) {
          try {
            await authInstance.signIn();
          } catch (signInError) {
            // // Silent sign-in failed, show prompt
            // await authInstance.signIn();
            if (signInError.error === "popup_closed_by_user") {
              setAuthError(
                "Login dibatalkan. Silakan coba lagi dan selesaikan proses login."
              );
            } else {
              setAuthError(
                `Gagal login: ${signInError.error || signInError.message}`
              );
            }
          }
        }
      } catch (initError) {
        console.error("Google API initialization error:", initError);
        setAuthError(
          `Failed to initialize Google API: ${
            initError.details || initError.message
          }`
        );
      } finally {
        setIsLoading(false);
      }
    });
  } catch (loadError) {
    console.error("Google API load error:", loadError);
    setAuthError(`Failed to load Google API: ${loadError.message}`);
    setIsLoading(false);
  }
};
