import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "116636762159-4chv55p11kuqq7rl59dh4b1o91hja6ou.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const SPREADSHEET_ID = "1H0E1vOeXlCa-gswVXlVlkD-s53jjf3GP5qC8ptPSKPc";
const SHEET_NAME = "Sheet1";

export default function GoogleSheetsUploader() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initializeGoogleAPI();
    };
    script.onerror = () => {
      setAuthError("Failed to load Google API script");
      setIsLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeGoogleAPI = async () => {
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
            setIsSignedIn(isSignedIn);
            if (!isSignedIn) {
              authInstance.signIn();
            }
          });

          // Set initial state
          setIsSignedIn(authInstance.isSignedIn.get());

          // If not signed in, attempt silent sign-in first
          if (!authInstance.isSignedIn.get()) {
            try {
              await authInstance.signIn({ prompt: "none" });
            } catch (silentError) {
              // Silent sign-in failed, show prompt
              await authInstance.signIn();
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

  const uploadData = async () => {
    if (!isSignedIn) {
      alert("Please sign in first!");
      return;
    }

    try {
      const data = [
        ["Nama", "Email", "NIS"],
        ["Possimussss", "email@example.com", "202501001"],
      ];

      const response = await gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `'${SHEET_NAME}'!A1`, // Pakai tanda petik jika ada spasi
        valueInputOption: "USER_ENTERED",
        resource: { values: data },
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

      alert(errorMessage);
    }
  };

  const signOut = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signOut();
    setIsSignedIn(false);
  };

  if (isLoading) {
    return <div className="p-4">Loading Google authentication...</div>;
  }

  if (authError) {
    return (
      <div className="p-4 text-red-600">
        <h2 className="text-xl font-bold mb-2">Authentication Error</h2>
        <p>{authError}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Google Sheets Upload</h1>

      {isSignedIn ? (
        <div className="space-y-4">
          <button
            onClick={uploadData}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Sample Data
          </button>
          <button
            onClick={signOut}
            className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p className="text-center">
          Authentication failed. Please reload the page.
        </p>
      )}
    </div>
  );
}
