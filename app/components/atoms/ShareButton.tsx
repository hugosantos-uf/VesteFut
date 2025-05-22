"use client";

import { useTranslations } from "next-intl";
import { Share as ShareIcon } from "lucide-react";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";

export function ShareButton() {
  const t = useTranslations("productDetails");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<AlertColor>("success");

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setSnackbarMessage(t("shareAlert"));
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Falha ao copiar o link: ", err);
        setSnackbarMessage("Erro ao copiar o link.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center gap-1 hover:text-green-600"
        aria-label={t("share")}
      >
        <ShareIcon size={20} />
        {t("share")}
      </button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
